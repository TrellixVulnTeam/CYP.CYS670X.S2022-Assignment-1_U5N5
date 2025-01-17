"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultPerPage = exports.defaultPage = void 0;
exports.initCaseApi = initCaseApi;

var _delete_cases = require("./cases/delete_cases");

var _find_cases = require("././cases/find_cases");

var _get_case = require("./cases/get_case");

var _patch_cases = require("./cases/patch_cases");

var _post_case = require("./cases/post_case");

var _push_case = require("./cases/push_case");

var _get_reporters = require("./cases/reporters/get_reporters");

var _get_status = require("./stats/get_status");

var _get_tags = require("./cases/tags/get_tags");

var _get_all_user_actions = require("./user_actions/get_all_user_actions");

var _delete_comment = require("./comments/delete_comment");

var _delete_all_comments = require("./comments/delete_all_comments");

var _find_comments = require("./comments/find_comments");

var _get_all_comment = require("./comments/get_all_comment");

var _get_comment = require("./comments/get_comment");

var _patch_comment = require("./comments/patch_comment");

var _post_comment = require("./comments/post_comment");

var _get_connectors = require("./configure/get_connectors");

var _get_configure = require("./configure/get_configure");

var _patch_configure = require("./configure/patch_configure");

var _post_configure = require("./configure/post_configure");

var _get_cases = require("./cases/alerts/get_cases");

var _get_alerts = require("./comments/get_alerts");

var _get_case_metrics = require("./metrics/get_case_metrics");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * Default page number when interacting with the saved objects API.
 */


const defaultPage = 1;
/**
 * Default number of results when interacting with the saved objects API.
 */

exports.defaultPage = defaultPage;
const defaultPerPage = 20;
exports.defaultPerPage = defaultPerPage;

function initCaseApi(deps) {
  // Cases
  (0, _delete_cases.initDeleteCasesApi)(deps);
  (0, _find_cases.initFindCasesApi)(deps);
  (0, _get_case.initGetCaseApi)(deps);
  (0, _patch_cases.initPatchCasesApi)(deps);
  (0, _post_case.initPostCaseApi)(deps);
  (0, _push_case.initPushCaseApi)(deps);
  (0, _get_all_user_actions.initGetAllCaseUserActionsApi)(deps); // Comments

  (0, _delete_comment.initDeleteCommentApi)(deps);
  (0, _delete_all_comments.initDeleteAllCommentsApi)(deps);
  (0, _find_comments.initFindCaseCommentsApi)(deps);
  (0, _get_comment.initGetCommentApi)(deps);
  (0, _get_all_comment.initGetAllCommentsApi)(deps);
  (0, _patch_comment.initPatchCommentApi)(deps);
  (0, _post_comment.initPostCommentApi)(deps); // Cases Configure

  (0, _get_connectors.initCaseConfigureGetActionConnector)(deps);
  (0, _get_configure.initGetCaseConfigure)(deps);
  (0, _patch_configure.initPatchCaseConfigure)(deps);
  (0, _post_configure.initPostCaseConfigure)(deps); // Reporters

  (0, _get_reporters.initGetReportersApi)(deps); // Status

  (0, _get_status.initGetCasesStatusApi)(deps); // Tags

  (0, _get_tags.initGetTagsApi)(deps); // Alerts

  (0, _get_cases.initGetCasesByAlertIdApi)(deps);
  (0, _get_alerts.initGetAllAlertsAttachToCaseApi)(deps); // Metrics

  (0, _get_case_metrics.initGetCaseMetricsApi)(deps);
}