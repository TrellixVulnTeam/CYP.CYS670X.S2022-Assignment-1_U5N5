"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AggTypesRegistry = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 * AggsCommonStart returns the _unitialized_ agg type providers, but in our
 * real start contract we will need to return the initialized versions.
 * So we need to provide the correct typings so they can be overwritten
 * on client/server.
 */
class AggTypesRegistry {
  constructor() {
    (0, _defineProperty2.default)(this, "bucketAggs", new Map());
    (0, _defineProperty2.default)(this, "metricAggs", new Map());
    (0, _defineProperty2.default)(this, "setup", () => {
      return {
        registerBucket: (name, type) => {
          if (this.bucketAggs.get(name) || this.metricAggs.get(name)) {
            throw new Error(`Agg has already been registered with name: ${name}`);
          }

          this.bucketAggs.set(name, type);
        },
        registerMetric: (name, type) => {
          if (this.bucketAggs.get(name) || this.metricAggs.get(name)) {
            throw new Error(`Agg has already been registered with name: ${name}`);
          }

          this.metricAggs.set(name, type);
        }
      };
    });
    (0, _defineProperty2.default)(this, "start", () => {
      return {
        get: name => {
          return this.bucketAggs.get(name) || this.metricAggs.get(name);
        },
        getAll: () => {
          return {
            buckets: Array.from(this.bucketAggs.values()),
            metrics: Array.from(this.metricAggs.values())
          };
        }
      };
    });
  }

}

exports.AggTypesRegistry = AggTypesRegistry;