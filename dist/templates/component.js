"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webComponent = void 0;
const common_tags_1 = require("common-tags");
const utils_1 = require("../utils");
const webComponent = (componentName, options) => {
    return `${common_tags_1.stripIndent `
  ${utils_1.getReactImportStr()}
  ${options.styledComponent ? utils_1.getStyledComponentStr(componentName) : ""}
  ${utils_1.getStylesImportStr(componentName, options)}

  type Props = {};

  const ${componentName} = (props: Props): JSX.Element => {
    const {
      /* destructuring goes here */
    } = props;

    return <div className={styles.${utils_1.lowerCaseString(componentName)}}>${componentName}</div>;
  };

  export default ${componentName};

  `}\n`;
};
exports.webComponent = webComponent;
exports.default = exports.webComponent;
