"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.esNodeRoute = esNodeRoute;

var _lodash = require("lodash");

var _configSchema = require("@kbn/config-schema");

var _get_cluster_stats = require("../../../../lib/cluster/get_cluster_stats");

var _nodes = require("../../../../lib/elasticsearch/nodes");

var _shards = require("../../../../lib/elasticsearch/shards");

var _get_metrics = require("../../../../lib/details/get_metrics");

var _handle_error = require("../../../../lib/errors/handle_error");

var _ccs_utils = require("../../../../../common/ccs_utils");

var _metric_set_node_detail = require("./metric_set_node_detail");

var _get_logs = require("../../../../lib/logs/get_logs");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


const {
  advanced: metricSetAdvanced,
  overview: metricSetOverview
} = _metric_set_node_detail.metricSets;

function esNodeRoute(server) {
  server.route({
    method: 'POST',
    path: '/api/monitoring/v1/clusters/{clusterUuid}/elasticsearch/nodes/{nodeUuid}',
    config: {
      validate: {
        params: _configSchema.schema.object({
          clusterUuid: _configSchema.schema.string(),
          nodeUuid: _configSchema.schema.string()
        }),
        payload: _configSchema.schema.object({
          ccs: _configSchema.schema.maybe(_configSchema.schema.string()),
          showSystemIndices: _configSchema.schema.boolean({
            defaultValue: false
          }),
          // show/hide system indices in shard allocation table
          timeRange: _configSchema.schema.object({
            min: _configSchema.schema.string(),
            max: _configSchema.schema.string()
          }),
          is_advanced: _configSchema.schema.boolean()
        })
      }
    },

    async handler(req) {
      const config = server.config;
      const ccs = req.payload.ccs;
      const showSystemIndices = req.payload.showSystemIndices;
      const clusterUuid = req.params.clusterUuid;
      const nodeUuid = req.params.nodeUuid;
      const start = req.payload.timeRange.min;
      const end = req.payload.timeRange.max;
      const filebeatIndexPattern = (0, _ccs_utils.prefixIndexPattern)(config, config.ui.logs.index, '*');
      const isAdvanced = req.payload.is_advanced;
      let metricSet;

      if (isAdvanced) {
        metricSet = metricSetAdvanced;
      } else {
        metricSet = metricSetOverview; // set the cgroup option if needed

        const showCgroupMetricsElasticsearch = config.ui.container.elasticsearch.enabled;
        const metricCpu = metricSet.find(m => m.name === 'node_cpu_metric');

        if (showCgroupMetricsElasticsearch) {
          metricCpu.keys = ['node_cgroup_quota_as_cpu_utilization'];
        } else {
          metricCpu.keys = ['node_cpu_utilization'];
        }
      }

      try {
        const cluster = await (0, _get_cluster_stats.getClusterStats)(req, clusterUuid, ccs);
        const clusterState = (0, _lodash.get)(cluster, 'cluster_state', (0, _lodash.get)(cluster, 'elasticsearch.cluster.stats.state'));
        const shardStats = await (0, _shards.getShardStats)(req, cluster, {
          includeIndices: true,
          includeNodes: true,
          nodeUuid
        });
        const nodeSummary = await (0, _nodes.getNodeSummary)(req, clusterState, shardStats, {
          clusterUuid,
          nodeUuid,
          start,
          end
        });
        const metrics = await (0, _get_metrics.getMetrics)(req, 'elasticsearch', metricSet, [{
          term: {
            'source_node.uuid': nodeUuid
          }
        }]);
        let logs;
        let shardAllocation;

        if (!isAdvanced) {
          // TODO: Why so many fields needed for a single component (shard legend)?
          const shardFilter = {
            bool: {
              should: [{
                term: {
                  'shard.node': nodeUuid
                }
              }, {
                term: {
                  'elasticsearch.node.name': nodeUuid
                }
              }]
            }
          };
          const stateUuid = (0, _lodash.get)(cluster, 'cluster_state.state_uuid', (0, _lodash.get)(cluster, 'elasticsearch.cluster.stats.state.state_uuid'));
          const allocationOptions = {
            shardFilter,
            stateUuid,
            showSystemIndices
          };
          const shards = await (0, _shards.getShardAllocation)(req, allocationOptions);
          shardAllocation = {
            shards,
            shardStats: {
              indices: shardStats.indices
            },
            nodes: shardStats.nodes,
            // for identifying nodes that shard relocates to
            stateUuid // for debugging/troubleshooting

          };
          logs = await (0, _get_logs.getLogs)(config, req, filebeatIndexPattern, {
            clusterUuid,
            nodeUuid,
            start,
            end
          });
        }

        return {
          nodeSummary,
          metrics,
          logs,
          ...shardAllocation
        };
      } catch (err) {
        throw (0, _handle_error.handleError)(err, req);
      }
    }

  });
}