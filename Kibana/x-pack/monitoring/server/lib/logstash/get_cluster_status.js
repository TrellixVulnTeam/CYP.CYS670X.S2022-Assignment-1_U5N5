"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClusterStatus = getClusterStatus;

var _lodash = require("lodash");

var _get_logstash_for_clusters = require("./get_logstash_for_clusters");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * Get the cluster status for Logstash instances.
 * The cluster status should only be displayed on cluster-wide pages. Individual Logstash nodes should show the node's status only.
 * Shared functionality between the different routes.
 *
 * @param {Object} req The incoming request.
 * @param {String} clusterUuid The cluster UUID for the associated Elasticsearch cluster.
 * @returns {Promise} The cluster status object.
 */


function getClusterStatus(req, {
  clusterUuid
}) {
  const clusters = [{
    cluster_uuid: clusterUuid
  }];
  return (0, _get_logstash_for_clusters.getLogstashForClusters)(req, clusters).then(clusterStatus => (0, _lodash.get)(clusterStatus, '[0].stats'));
}