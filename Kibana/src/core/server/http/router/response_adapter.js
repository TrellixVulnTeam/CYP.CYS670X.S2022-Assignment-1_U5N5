"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HapiResponseAdapter = void 0;

var _typeDetect = _interopRequireDefault(require("type-detect"));

var _boom = _interopRequireDefault(require("@hapi/boom"));

var stream = _interopRequireWildcard(require("stream"));

var _errors = require("../../elasticsearch/client/errors");

var _response = require("./response");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
function setHeaders(response, headers = {}) {
  Object.entries(headers).forEach(([header, value]) => {
    if (value !== undefined) {
      // Hapi typings for header accept only strings, although string[] is a valid value
      response.header(header, value);
    }
  });
  applyEtag(response, headers);
  return response;
}

const statusHelpers = {
  isSuccess: code => code >= 100 && code < 300,
  isRedirect: code => code >= 300 && code < 400,
  isError: code => code >= 400 && code < 600
};

class HapiResponseAdapter {
  constructor(responseToolkit) {
    this.responseToolkit = responseToolkit;
  }

  toBadRequest(message) {
    const error = _boom.default.badRequest();

    error.output.payload.message = message;
    return error;
  }

  toInternalError() {
    const error = new _boom.default.Boom('', {
      statusCode: 500
    });
    error.output.payload.message = 'An internal server error occurred. Check Kibana server logs for details.';
    return error;
  }

  handle(kibanaResponse) {
    if (!(kibanaResponse instanceof _response.KibanaResponse)) {
      throw new Error(`Unexpected result from Route Handler. Expected KibanaResponse, but given: ${(0, _typeDetect.default)(kibanaResponse)}.`);
    }

    return this.toHapiResponse(kibanaResponse);
  }

  toHapiResponse(kibanaResponse) {
    if (kibanaResponse.options.bypassErrorFormat) {
      return this.toSuccess(kibanaResponse);
    }

    if (statusHelpers.isError(kibanaResponse.status)) {
      return this.toError(kibanaResponse);
    }

    if (statusHelpers.isSuccess(kibanaResponse.status)) {
      return this.toSuccess(kibanaResponse);
    }

    if (statusHelpers.isRedirect(kibanaResponse.status)) {
      return this.toRedirect(kibanaResponse);
    }

    throw new Error(`Unexpected Http status code. Expected from 100 to 599, but given: ${kibanaResponse.status}.`);
  }

  toSuccess(kibanaResponse) {
    const response = this.responseToolkit.response(kibanaResponse.payload).code(kibanaResponse.status);
    setHeaders(response, kibanaResponse.options.headers);
    return response;
  }

  toRedirect(kibanaResponse) {
    const {
      headers
    } = kibanaResponse.options;

    if (!headers || typeof headers.location !== 'string') {
      throw new Error("expected 'location' header to be set");
    }

    const response = this.responseToolkit.response(kibanaResponse.payload).redirect(headers.location).code(kibanaResponse.status).takeover();
    setHeaders(response, kibanaResponse.options.headers);
    return response;
  }

  toError(kibanaResponse) {
    const {
      payload
    } = kibanaResponse; // Special case for when we are proxying requests and want to enable streaming back error responses opaquely.

    if (Buffer.isBuffer(payload) || payload instanceof stream.Readable) {
      const response = this.responseToolkit.response(kibanaResponse.payload).code(kibanaResponse.status);
      setHeaders(response, kibanaResponse.options.headers);
      return response;
    } // we use for BWC with Boom payload for error responses - {error: string, message: string, statusCode: string}


    const error = new _boom.default.Boom('', {
      statusCode: kibanaResponse.status
    });
    error.output.payload.message = getErrorMessage(payload);
    const attributes = getErrorAttributes(payload);

    if (attributes) {
      error.output.payload.attributes = attributes;
    }

    const headers = kibanaResponse.options.headers;

    if (headers) {
      error.output.headers = headers;
    }

    return error;
  }

}

exports.HapiResponseAdapter = HapiResponseAdapter;

function getErrorMessage(payload) {
  if (!payload) {
    throw new Error('expected error message to be provided');
  }

  if (typeof payload === 'string') return payload; // for ES response errors include nested error reason message. it doesn't contain sensitive data.

  if ((0, _errors.isResponseError)(payload)) {
    var _payload$meta$body, _payload$meta$body$er;

    return `[${payload.message}]: ${(_payload$meta$body = payload.meta.body) === null || _payload$meta$body === void 0 ? void 0 : (_payload$meta$body$er = _payload$meta$body.error) === null || _payload$meta$body$er === void 0 ? void 0 : _payload$meta$body$er.reason}`;
  }

  return getErrorMessage(payload.message);
}

function getErrorAttributes(payload) {
  return typeof payload === 'object' && 'attributes' in payload ? payload.attributes : undefined;
}

function applyEtag(response, headers) {
  const etagHeader = Object.keys(headers).find(header => header.toLowerCase() === 'etag');

  if (etagHeader) {
    response.etag(headers[etagHeader]);
  }
}