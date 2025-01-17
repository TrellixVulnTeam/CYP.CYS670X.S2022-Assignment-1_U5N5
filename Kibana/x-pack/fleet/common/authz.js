"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateAuthz = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

const calculateAuthz = ({
  fleet,
  integrations,
  isSuperuser
}) => ({
  fleet: {
    all: fleet.all && (integrations.all || integrations.read),
    // These are currently used by Fleet Server setup
    setup: fleet.all || fleet.setup,
    readEnrollmentTokens: fleet.all || fleet.setup,
    readAgentPolicies: fleet.all || fleet.setup
  },
  integrations: {
    readPackageInfo: fleet.all || fleet.setup || integrations.all || integrations.read,
    readInstalledPackages: integrations.all || integrations.read,
    installPackages: fleet.all && integrations.all,
    upgradePackages: fleet.all && integrations.all,
    removePackages: fleet.all && integrations.all,
    uploadPackages: isSuperuser,
    readPackageSettings: fleet.all && integrations.all,
    writePackageSettings: fleet.all && integrations.all,
    readIntegrationPolicies: fleet.all && (integrations.all || integrations.read),
    writeIntegrationPolicies: fleet.all && integrations.all
  }
});

exports.calculateAuthz = calculateAuthz;