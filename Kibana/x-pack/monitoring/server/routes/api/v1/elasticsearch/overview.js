"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.esOverviewRoute = esOverviewRoute;

var _configSchema = require("@kbn/config-schema");

var _get_cluster_stats = require("../../../../lib/cluster/get_cluster_stats");

var _get_cluster_status = require("../../../../lib/cluster/get_cluster_status");

var _get_last_recovery = require("../../../../lib/elasticsearch/get_last_recovery");

var _get_metrics = require("../../../../lib/details/get_metrics");

var _handle_error = require("../../../../lib/errors/handle_error");

var _ccs_utils = require("../../../../../common/ccs_utils");

var _metric_set_overview = require("./metric_set_overview");

var _logs = require("../../../../lib/logs");

var _get_indices_unassigned_shard_stats = require("../../../../lib/elasticsearch/shards/get_indices_unassigned_shard_stats");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


function esOverviewRoute(server) {
  server.route({
    method: 'POST',
    path: '/api/monitoring/v1/clusters/{clusterUuid}/elasticsearch',
    config: {
      validate: {
        params: _configSchema.schema.object({
          clusterUuid: _configSchema.schema.string()
        }),
        payload: _configSchema.schema.object({
          ccs: _configSchema.schema.maybe(_configSchema.schema.string()),
          timeRange: _configSchema.schema.object({
            min: _configSchema.schema.string(),
            max: _configSchema.schema.string()
          })
        })
      }
    },

    async handler(req) {
      const config = server.config;
      const clusterUuid = req.params.clusterUuid;
      const filebeatIndexPattern = (0, _ccs_utils.prefixIndexPattern)(config, config.ui.logs.index, '*');
      const start = req.payload.timeRange.min;
      const end = req.payload.timeRange.max;

      try {
        const [clusterStats, metrics, shardActivity, logs] = await Promise.all([(0, _get_cluster_stats.getClusterStats)(req, clusterUuid), (0, _get_metrics.getMetrics)(req, 'elasticsearch', _metric_set_overview.metricSet), (0, _get_last_recovery.getLastRecovery)(req, config.ui.max_bucket_size), // TODO this call is missing some items from the signature of `getLogs`, will need to resolve during TS conversion
        (0, _logs.getLogs)(config, req, filebeatIndexPattern, {
          clusterUuid,
          start,
          end
        })]);
        const indicesUnassignedShardStats = await (0, _get_indices_unassigned_shard_stats.getIndicesUnassignedShardStats)(req, clusterStats);
        const result = {
          clusterStatus: (0, _get_cluster_status.getClusterStatus)(clusterStats, indicesUnassignedShardStats),
          metrics,
          logs,
          shardActivity
        };
        return result;
      } catch (err) {
        throw (0, _handle_error.handleError)(err, req);
      }
    }

  });
}