"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAnomalyDetectionJobs = createAnomalyDetectionJobs;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _lodash = require("lodash");

var _moment = _interopRequireDefault(require("moment"));

var _v = _interopRequireDefault(require("uuid/v4"));

var _anomaly_detection = require("../../../common/anomaly_detection");

var _elasticsearch_fieldnames = require("../../../common/elasticsearch_fieldnames");

var _processor_event = require("../../../common/processor_event");

var _environment_query = require("../../../common/utils/environment_query");

var _with_apm_span = require("../../utils/with_apm_span");

var _constants = require("./constants");

var _get_anomaly_detection_jobs = require("./get_anomaly_detection_jobs");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


async function createAnomalyDetectionJobs(setup, environments, logger) {
  const {
    ml,
    indices
  } = setup;

  if (!ml) {
    throw _boom.default.notImplemented(_anomaly_detection.ML_ERRORS.ML_NOT_AVAILABLE);
  }

  const uniqueMlJobEnvs = await getUniqueMlJobEnvs(setup, environments, logger);

  if (uniqueMlJobEnvs.length === 0) {
    return [];
  }

  return (0, _with_apm_span.withApmSpan)('create_anomaly_detection_jobs', async () => {
    logger.info(`Creating ML anomaly detection jobs for environments: [${uniqueMlJobEnvs}].`);
    const dataViewName = indices.metric;
    const responses = await Promise.all(uniqueMlJobEnvs.map(environment => createAnomalyDetectionJob({
      ml,
      environment,
      dataViewName
    })));
    const jobResponses = responses.flatMap(response => response.jobs);
    const failedJobs = jobResponses.filter(({
      success
    }) => !success);

    if (failedJobs.length > 0) {
      const errors = failedJobs.map(({
        id,
        error
      }) => ({
        id,
        error
      }));
      throw new Error(`An error occurred while creating ML jobs: ${JSON.stringify(errors)}`);
    }

    return jobResponses;
  });
}

async function createAnomalyDetectionJob({
  ml,
  environment,
  dataViewName
}) {
  return (0, _with_apm_span.withApmSpan)('create_anomaly_detection_job', async () => {
    const randomToken = (0, _v.default)().substr(-4);
    return ml.modules.setup({
      moduleId: _constants.ML_MODULE_ID_APM_TRANSACTION,
      prefix: `${_constants.APM_ML_JOB_GROUP}-${(0, _lodash.snakeCase)(environment)}-${randomToken}-`,
      groups: [_constants.APM_ML_JOB_GROUP],
      indexPatternName: dataViewName,
      applyToAllSpaces: true,
      start: (0, _moment.default)().subtract(4, 'weeks').valueOf(),
      query: {
        bool: {
          filter: [{
            term: {
              [_elasticsearch_fieldnames.PROCESSOR_EVENT]: _processor_event.ProcessorEvent.metric
            }
          }, {
            term: {
              [_elasticsearch_fieldnames.METRICSET_NAME]: 'transaction'
            }
          }, ...(0, _environment_query.environmentQuery)(environment)]
        }
      },
      startDatafeed: true,
      jobOverrides: [{
        custom_settings: {
          job_tags: {
            environment,
            // identifies this as an APM ML job & facilitates future migrations
            apm_ml_version: 3
          }
        }
      }]
    });
  });
}

async function getUniqueMlJobEnvs(setup, environments, logger) {
  // skip creation of duplicate ML jobs
  const jobs = await (0, _get_anomaly_detection_jobs.getAnomalyDetectionJobs)(setup);
  const existingMlJobEnvs = jobs.filter(job => job.version === 3).map(({
    environment
  }) => environment);
  const requestedExistingMlJobEnvs = environments.filter(env => existingMlJobEnvs.includes(env));

  if (requestedExistingMlJobEnvs.length) {
    logger.warn(`Skipping creation of existing ML jobs for environments: [${requestedExistingMlJobEnvs}]}`);
  }

  return environments.filter(env => !existingMlJobEnvs.includes(env));
}