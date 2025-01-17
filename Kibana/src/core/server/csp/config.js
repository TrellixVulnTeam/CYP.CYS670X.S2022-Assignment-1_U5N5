"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

var _configSchema = require("@kbn/config-schema");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const getDirectiveValidator = options => {
  const validateValue = getDirectiveValueValidator(options);
  return values => {
    for (const value of values) {
      const error = validateValue(value);

      if (error) {
        return error;
      }
    }
  };
};

const getDirectiveValueValidator = ({
  allowNone,
  allowNonce
}) => {
  return value => {
    if (!allowNonce && value.startsWith('nonce-')) {
      return `using "nonce-*" is considered insecure and is not allowed`;
    }

    if (!allowNone && (value === `none` || value === `'none'`)) {
      return `using "none" would conflict with Kibana's default csp configuration and is not allowed`;
    }
  };
};

const configSchema = _configSchema.schema.object({
  script_src: _configSchema.schema.arrayOf(_configSchema.schema.string(), {
    defaultValue: [],
    validate: getDirectiveValidator({
      allowNone: false,
      allowNonce: false
    })
  }),
  worker_src: _configSchema.schema.arrayOf(_configSchema.schema.string(), {
    defaultValue: [],
    validate: getDirectiveValidator({
      allowNone: false,
      allowNonce: false
    })
  }),
  style_src: _configSchema.schema.arrayOf(_configSchema.schema.string(), {
    defaultValue: [],
    validate: getDirectiveValidator({
      allowNone: false,
      allowNonce: false
    })
  }),
  connect_src: _configSchema.schema.arrayOf(_configSchema.schema.string(), {
    defaultValue: [],
    validate: getDirectiveValidator({
      allowNone: false,
      allowNonce: false
    })
  }),
  default_src: _configSchema.schema.arrayOf(_configSchema.schema.string(), {
    defaultValue: [],
    validate: getDirectiveValidator({
      allowNone: false,
      allowNonce: false
    })
  }),
  font_src: _configSchema.schema.arrayOf(_configSchema.schema.string(), {
    defaultValue: [],
    validate: getDirectiveValidator({
      allowNone: false,
      allowNonce: false
    })
  }),
  frame_src: _configSchema.schema.arrayOf(_configSchema.schema.string(), {
    defaultValue: [],
    validate: getDirectiveValidator({
      allowNone: false,
      allowNonce: false
    })
  }),
  img_src: _configSchema.schema.arrayOf(_configSchema.schema.string(), {
    defaultValue: [],
    validate: getDirectiveValidator({
      allowNone: false,
      allowNonce: false
    })
  }),
  frame_ancestors: _configSchema.schema.arrayOf(_configSchema.schema.string(), {
    defaultValue: [],
    validate: getDirectiveValidator({
      allowNone: false,
      allowNonce: false
    })
  }),
  report_uri: _configSchema.schema.arrayOf(_configSchema.schema.string(), {
    defaultValue: [],
    validate: getDirectiveValidator({
      allowNone: true,
      allowNonce: false
    })
  }),
  report_to: _configSchema.schema.arrayOf(_configSchema.schema.string(), {
    defaultValue: []
  }),
  strict: _configSchema.schema.boolean({
    defaultValue: true
  }),
  warnLegacyBrowsers: _configSchema.schema.boolean({
    defaultValue: true
  }),
  disableEmbedding: _configSchema.schema.oneOf([_configSchema.schema.literal(false)], {
    defaultValue: false
  })
}, {
  validate: cspConfig => {
    const hasUnsafeInlineScriptSrc = cspConfig.script_src.includes(`unsafe-inline`) || cspConfig.script_src.includes(`'unsafe-inline'`);

    if (cspConfig.strict && hasUnsafeInlineScriptSrc) {
      return 'cannot use `unsafe-inline` for `script_src` when `csp.strict` is true';
    }

    if (cspConfig.warnLegacyBrowsers && hasUnsafeInlineScriptSrc) {
      return 'cannot use `unsafe-inline` for `script_src` when `csp.warnLegacyBrowsers` is true';
    }
  }
});
/**
 * @internal
 */


const config = {
  // TODO: Move this to server.csp using config deprecations
  // ? https://github.com/elastic/kibana/pull/52251
  path: 'csp',
  schema: configSchema
};
exports.config = config;