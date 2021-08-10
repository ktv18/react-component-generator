"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_tags_1 = require("common-tags");
const utils_1 = require("../utils");
const webStyles = (componentName) => `${common_tags_1.stripIndent `
  .${utils_1.lowerCaseString(componentName)} {}

  `}\n`;
exports.default = webStyles;
