"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styledComponent = void 0;
const common_tags_1 = require("common-tags");
const utils_1 = require("../utils");
const styledComponent = (componentName) => {
    return `${common_tags_1.stripIndent `
  ${utils_1.getReactImportStr()}
  ${utils_1.getStyledImportStr()}

  export const Styled${componentName} = styled.div\`
    width: 100%;
  \`;
  `}\n`;
};
exports.styledComponent = styledComponent;
exports.default = exports.styledComponent;
