"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasHistoricalAgentData = hasHistoricalAgentData;

var _processor_event = require("../../../common/processor_event");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
// Note: this logic is duplicated in tutorials/apm/envs/on_prem


async function hasHistoricalAgentData(setup) {
  const {
    apmEventClient
  } = setup;
  const params = {
    terminate_after: 1,
    apm: {
      events: [_processor_event.ProcessorEvent.error, _processor_event.ProcessorEvent.metric, _processor_event.ProcessorEvent.transaction]
    },
    body: {
      size: 0
    }
  };
  const resp = await apmEventClient.search('has_historical_agent_data', params);
  return resp.hits.total.value > 0;
}