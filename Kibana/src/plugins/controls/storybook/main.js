"use strict";

var _storybook = require("@kbn/storybook");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
// We have to do this because the kbn/storybook preset overrides the manager entries,
// so we can't customize the theme.
module.exports = { ..._storybook.defaultConfigWebFinal,
  addons: ['@storybook/addon-a11y', '@storybook/addon-essentials']
};