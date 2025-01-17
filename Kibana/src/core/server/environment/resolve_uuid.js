"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UUID_7_6_0_BUG = void 0;
exports.resolveInstanceUuid = resolveInstanceUuid;

var _uuid = _interopRequireDefault(require("uuid"));

var _path = require("path");

var _fs = require("./fs");

var _http_config = require("../http/http_config");

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
const FILE_ENCODING = 'utf8';
const FILE_NAME = 'uuid';
/**
 * This UUID was inadvertently shipped in the 7.6.0 distributable and should be deleted if found.
 * See https://github.com/elastic/kibana/issues/57673 for more info.
 */

const UUID_7_6_0_BUG = `ce42b997-a913-4d58-be46-bb1937feedd6`;
exports.UUID_7_6_0_BUG = UUID_7_6_0_BUG;

async function resolveInstanceUuid({
  pathConfig,
  serverConfig,
  logger
}) {
  const uuidFilePath = (0, _path.join)(pathConfig.data, FILE_NAME);
  const uuidFromFile = await readUuidFromFile(uuidFilePath, logger);
  const uuidFromConfig = serverConfig.uuid;

  if (uuidFromConfig) {
    if (uuidFromConfig === uuidFromFile) {
      // uuid matches, nothing to do
      logger.debug(`Kibana instance UUID: ${uuidFromConfig}`);
      return uuidFromConfig;
    } else {
      // uuid in file don't match, or file was not present, we need to write it.
      if (uuidFromFile === undefined) {
        logger.debug(`Setting new Kibana instance UUID: ${uuidFromConfig}`);
      } else {
        logger.debug(`Updating Kibana instance UUID to: ${uuidFromConfig} (was: ${uuidFromFile})`);
      }

      await writeUuidToFile(uuidFilePath, uuidFromConfig);
      return uuidFromConfig;
    }
  }

  if (uuidFromFile === undefined) {
    const newUuid = _uuid.default.v4(); // no uuid either in config or file, we need to generate and write it.


    logger.debug(`Setting new Kibana instance UUID: ${newUuid}`);
    await writeUuidToFile(uuidFilePath, newUuid);
    return newUuid;
  }

  logger.debug(`Resuming persistent Kibana instance UUID: ${uuidFromFile}`);
  return uuidFromFile;
}

async function readUuidFromFile(filepath, logger) {
  const content = await readFileContent(filepath);

  if (content === UUID_7_6_0_BUG) {
    logger.debug(`UUID from 7.6.0 bug detected, ignoring file UUID`);
    return undefined;
  }

  if (content && !content.match(_http_config.uuidRegexp)) {
    throw new Error(`${filepath} contains an invalid UUID`);
  }

  return content;
}

async function readFileContent(filepath) {
  try {
    const content = await (0, _fs.readFile)(filepath);
    return content.toString(FILE_ENCODING).trim();
  } catch (e) {
    if (e.code === 'ENOENT') {
      // non-existent uuid file is ok, we will create it.
      return undefined;
    }

    throw new Error(`Unable to read UUID file at ${filepath}.  ` + 'Ensure Kibana has sufficient permissions to read / write to this file.  ' + `Error was: ${e.code}`);
  }
}

async function writeUuidToFile(filepath, uuidValue) {
  try {
    return await (0, _fs.writeFile)(filepath, uuidValue, {
      encoding: FILE_ENCODING
    });
  } catch (e) {
    throw new Error(`Unable to write to UUID file at ${filepath}. ` + 'Ensure Kibana has sufficient permissions to read / write to this file.  ' + `Error was: ${e.code}`);
  }
}