"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apmConfigMapping = void 0;
exports.getApmPackagePolicyDefinition = getApmPackagePolicyDefinition;
exports.preprocessLegacyFields = preprocessLegacyFields;

var _jsYaml = _interopRequireDefault(require("js-yaml"));

var _fleet = require("../../../common/fleet");

var _get_cloud_apm_package_policy = require("./get_cloud_apm_package_policy");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */


async function getApmPackagePolicyDefinition(options) {
  const {
    apmServerSchema,
    cloudPluginSetup,
    fleetPluginStart,
    kibanaVersion
  } = options;
  return {
    name: 'Elastic APM',
    namespace: 'default',
    enabled: true,
    policy_id: _fleet.POLICY_ELASTIC_AGENT_ON_CLOUD,
    output_id: '',
    inputs: [{
      type: 'apm',
      enabled: true,
      streams: [],
      vars: getApmPackageInputVars({
        cloudPluginSetup,
        fleetPluginStart,
        apmServerSchema: preprocessLegacyFields({
          apmServerSchema
        }),
        kibanaVersion
      })
    }],
    package: {
      name: _get_cloud_apm_package_policy.APM_PACKAGE_NAME,
      version: await getApmPackageVersion(fleetPluginStart, kibanaVersion),
      title: 'Elastic APM'
    }
  };
}

async function getApmPackageVersion(fleetPluginStart, kibanaVersion) {
  if (fleetPluginStart && (0, _fleet.isPrereleaseVersion)(kibanaVersion)) {
    try {
      const latestApmPackage = await fleetPluginStart.packageService.asInternalUser.fetchFindLatestPackage('apm');
      return latestApmPackage.version;
    } catch (error) {
      return _fleet.SUPPORTED_APM_PACKAGE_VERSION;
    }
  }

  return _fleet.SUPPORTED_APM_PACKAGE_VERSION;
}

function preprocessLegacyFields({
  apmServerSchema
}) {
  const copyOfApmServerSchema = { ...apmServerSchema
  };
  [{
    key: 'apm-server.auth.anonymous.rate_limit.event_limit',
    legacyKey: 'apm-server.rum.event_rate.limit'
  }, {
    key: 'apm-server.auth.anonymous.rate_limit.ip_limit',
    legacyKey: 'apm-server.rum.event_rate.lru_size'
  }, {
    key: 'apm-server.auth.anonymous.allow_service',
    legacyKey: 'apm-server.rum.allow_service_names'
  }, {
    key: 'apm-server.auth.secret_token',
    legacyKey: 'apm-server.secret_token'
  }, {
    key: 'apm-server.auth.api_key.enabled',
    legacyKey: 'apm-server.api_key.enabled'
  }].forEach(({
    key,
    legacyKey
  }) => {
    if (!copyOfApmServerSchema[key]) {
      copyOfApmServerSchema[key] = copyOfApmServerSchema[legacyKey];
      delete copyOfApmServerSchema[legacyKey];
    }
  });
  return copyOfApmServerSchema;
}

function getApmPackageInputVars(options) {
  const {
    apmServerSchema
  } = options;
  const apmServerConfigs = Object.entries(apmConfigMapping).map(([key, {
    name,
    type,
    getValue
  }]) => ({
    key,
    name,
    type,
    getValue
  }));
  const inputVars = apmServerConfigs.reduce((acc, {
    key,
    name,
    type,
    getValue
  }) => {
    var _ref;

    const apmServerSchemaValue = apmServerSchema[key];
    const value = (_ref = getValue ? getValue(options, apmServerSchemaValue) : apmServerSchemaValue) !== null && _ref !== void 0 ? _ref : ''; // defaults to an empty string to be edited in Fleet UI

    return { ...acc,
      [name]: {
        type,
        value
      }
    };
  }, {});
  return inputVars;
}

const apmConfigMapping = {
  'apm-server.host': {
    name: 'host',
    type: 'text'
  },
  'apm-server.url': {
    name: 'url',
    type: 'text',
    getValue: ({
      cloudPluginSetup
    }) => {
      var _cloudPluginSetup$apm;

      return cloudPluginSetup === null || cloudPluginSetup === void 0 ? void 0 : (_cloudPluginSetup$apm = cloudPluginSetup.apm) === null || _cloudPluginSetup$apm === void 0 ? void 0 : _cloudPluginSetup$apm.url;
    }
  },
  'apm-server.rum.enabled': {
    name: 'enable_rum',
    type: 'bool'
  },
  'apm-server.default_service_environment': {
    name: 'default_service_environment',
    type: 'text'
  },
  'apm-server.rum.allow_origins': {
    name: 'rum_allow_origins',
    type: 'text',
    getValue: (options, apmServerSchemaValue) => {
      var _ensureValidMultiText;

      return (_ensureValidMultiText = ensureValidMultiText(apmServerSchemaValue)) !== null && _ensureValidMultiText !== void 0 ? _ensureValidMultiText : '';
    }
  },
  'apm-server.rum.allow_headers': {
    name: 'rum_allow_headers',
    type: 'text'
  },
  'apm-server.rum.event_rate.limit': {
    name: 'rum_event_rate_limit',
    type: 'integer'
  },
  'apm-server.rum.allow_service_names': {
    name: 'rum_allow_service_names',
    type: 'text'
  },
  'apm-server.rum.event_rate.lru_size': {
    name: 'rum_event_rate_lru_size',
    type: 'integer'
  },
  'apm-server.rum.response_headers': {
    name: 'rum_response_headers',
    type: 'yaml'
  },
  'apm-server.rum.library_pattern': {
    name: 'rum_library_pattern',
    type: 'text'
  },
  'apm-server.rum.exclude_from_grouping': {
    name: 'rum_exclude_from_grouping',
    type: 'text'
  },
  'apm-server.max_event_size': {
    name: 'max_event_bytes',
    type: 'integer'
  },
  'apm-server.capture_personal_data': {
    name: 'capture_personal_data',
    type: 'bool'
  },
  'apm-server.max_header_size': {
    name: 'max_header_bytes',
    type: 'integer'
  },
  'apm-server.idle_timeout': {
    name: 'idle_timeout',
    type: 'text'
  },
  'apm-server.read_timeout': {
    name: 'read_timeout',
    type: 'text'
  },
  'apm-server.shutdown_timeout': {
    name: 'shutdown_timeout',
    type: 'text'
  },
  'apm-server.write_timeout': {
    name: 'write_timeout',
    type: 'text'
  },
  'apm-server.max_connections': {
    name: 'max_connections',
    type: 'integer'
  },
  'apm-server.response_headers': {
    name: 'response_headers',
    type: 'yaml'
  },
  'apm-server.expvar.enabled': {
    name: 'expvar_enabled',
    type: 'bool'
  },
  'apm-server.ssl.enabled': {
    name: 'tls_enabled',
    type: 'bool'
  },
  'apm-server.ssl.certificate': {
    name: 'tls_certificate',
    type: 'text'
  },
  'apm-server.ssl.key': {
    name: 'tls_key',
    type: 'text'
  },
  'apm-server.ssl.supported_protocols': {
    name: 'tls_supported_protocols',
    type: 'text'
  },
  'apm-server.ssl.cipher_suites': {
    name: 'tls_cipher_suites',
    type: 'text'
  },
  'apm-server.ssl.curve_types': {
    name: 'tls_curve_types',
    type: 'text'
  },
  'apm-server.auth.secret_token': {
    name: 'secret_token',
    type: 'text'
  },
  'apm-server.auth.api_key.enabled': {
    name: 'api_key_enabled',
    type: 'bool'
  },
  'apm-server.auth.api_key.limit': {
    name: 'api_key_limit',
    type: 'bool'
  },
  'apm-server.auth.anonymous.enabled': {
    name: 'anonymous_enabled',
    type: 'bool'
  },
  'apm-server.auth.anonymous.allow_agent': {
    name: 'anonymous_allow_agent',
    type: 'text'
  },
  'apm-server.auth.anonymous.allow_service': {
    name: 'anonymous_allow_service',
    type: 'text'
  },
  'apm-server.auth.anonymous.rate_limit.ip_limit': {
    name: 'anonymous_rate_limit_ip_limit',
    type: 'integer'
  },
  'apm-server.auth.anonymous.rate_limit.event_limit': {
    name: 'anonymous_rate_limit_event_limit',
    type: 'integer'
  },
  'apm-server.sampling.tail.enabled': {
    name: 'tail_sampling_enabled',
    type: 'bool'
  },
  'apm-server.sampling.tail.interval': {
    name: 'tail_sampling_interval',
    type: 'text'
  },
  'apm-server.sampling.tail.policies': {
    name: 'tail_sampling_policies',
    type: 'yaml'
  }
};
exports.apmConfigMapping = apmConfigMapping;

function ensureValidMultiText(textMultiValue) {
  if (!textMultiValue) {
    return undefined;
  }

  return textMultiValue.map(escapeInvalidYamlString);
}

function escapeInvalidYamlString(yamlString) {
  try {
    _jsYaml.default.load(yamlString);
  } catch (error) {
    if (error instanceof _jsYaml.default.YAMLException) {
      return `"${yamlString}"`;
    }
  }

  return yamlString;
}