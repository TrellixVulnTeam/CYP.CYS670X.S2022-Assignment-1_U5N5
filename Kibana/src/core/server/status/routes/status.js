"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerStatusRoute = void 0;

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

var _configSchema = require("@kbn/config-schema");

var _types = require("../types");

var _legacy_status = require("../legacy_status");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const SNAPSHOT_POSTFIX = /-SNAPSHOT$/;

const registerStatusRoute = ({
  router,
  config,
  metrics,
  status,
  incrementUsageCounter
}) => {
  // Since the status.plugins$ observable is not subscribed to elsewhere, we need to subscribe it here to eagerly load
  // the plugins status when Kibana starts up so this endpoint responds quickly on first boot.
  const combinedStatus$ = new _rxjs.ReplaySubject(1);
  (0, _rxjs.combineLatest)([status.overall$, status.coreOverall$, status.core$, status.plugins$]).subscribe(combinedStatus$);
  router.get({
    path: '/api/status',
    options: {
      authRequired: !config.allowAnonymous,
      tags: ['api'] // ensures that unauthenticated calls receive a 401 rather than a 302 redirect to login page

    },
    validate: {
      query: _configSchema.schema.object({
        v7format: _configSchema.schema.maybe(_configSchema.schema.boolean()),
        v8format: _configSchema.schema.maybe(_configSchema.schema.boolean())
      }, {
        validate: ({
          v7format,
          v8format
        }) => {
          if (typeof v7format === 'boolean' && typeof v8format === 'boolean') {
            return `provide only one format option: v7format or v8format`;
          }
        }
      })
    }
  }, async (context, req, res) => {
    var _req$query;

    const {
      version,
      buildSha,
      buildNum
    } = config.packageInfo;
    const versionWithoutSnapshot = version.replace(SNAPSHOT_POSTFIX, '');
    const [overall, coreOverall, core, plugins] = await combinedStatus$.pipe((0, _operators.first)()).toPromise();
    const {
      v8format = true,
      v7format = false
    } = (_req$query = req.query) !== null && _req$query !== void 0 ? _req$query : {};
    let statusInfo;

    if (!v7format && v8format) {
      statusInfo = {
        overall,
        core,
        plugins
      };
    } else {
      incrementUsageCounter({
        counterName: 'status_v7format'
      });
      statusInfo = (0, _legacy_status.calculateLegacyStatus)({
        overall,
        core,
        plugins,
        versionWithoutSnapshot
      });
    }

    const lastMetrics = await metrics.getOpsMetrics$().pipe((0, _operators.first)()).toPromise();
    const body = {
      name: config.serverName,
      uuid: config.uuid,
      version: {
        number: versionWithoutSnapshot,
        build_hash: buildSha,
        build_number: buildNum,
        build_snapshot: SNAPSHOT_POSTFIX.test(version)
      },
      status: statusInfo,
      metrics: {
        last_updated: lastMetrics.collected_at.toISOString(),
        collection_interval_in_millis: metrics.collectionInterval,
        os: lastMetrics.os,
        process: lastMetrics.process,
        processes: lastMetrics.processes,
        response_times: lastMetrics.response_times,
        concurrent_connections: lastMetrics.concurrent_connections,
        requests: { ...lastMetrics.requests,
          status_codes: lastMetrics.requests.statusCodes
        }
      }
    };
    const statusCode = coreOverall.level >= _types.ServiceStatusLevels.unavailable ? 503 : 200;
    return res.custom({
      body,
      statusCode,
      bypassErrorFormat: true
    });
  });
};

exports.registerStatusRoute = registerStatusRoute;