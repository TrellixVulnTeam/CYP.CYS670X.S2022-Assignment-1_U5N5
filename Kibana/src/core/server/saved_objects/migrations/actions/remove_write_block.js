"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeWriteBlock = void 0;

var Either = _interopRequireWildcard(require("fp-ts/lib/Either"));

var _catch_retryable_es_client_errors = require("./catch_retryable_es_client_errors");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 * Removes a write block from an index
 */
const removeWriteBlock = ({
  client,
  index
}) => () => {
  return client.indices.putSettings({
    index,
    // Don't change any existing settings
    preserve_existing: true,
    body: {
      blocks: {
        write: false
      }
    }
  }, {
    maxRetries: 0
    /** handle retry ourselves for now */

  }).then(res => {
    return res.body.acknowledged === true ? Either.right('remove_write_block_succeeded') : Either.left({
      type: 'retryable_es_client_error',
      message: 'remove_write_block_failed'
    });
  }).catch(_catch_retryable_es_client_errors.catchRetryableEsClientErrors);
};

exports.removeWriteBlock = removeWriteBlock;