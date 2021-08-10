"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_tags_1 = require("common-tags");
exports.default = (componentName) => common_tags_1.stripIndent `
  export { default } from './${componentName}';
\n`;
