"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webComponent = void 0;
const common_tags_1 = require("common-tags");
const utils_1 = require("../utils");
const webComponent = (componentName, options) => {
    const stylesExt = options.scss ? "scss" : "css";
    return `${common_tags_1.stripIndent `
  import React from 'react';
  import classnames from 'classnames';
  ${options.cssModules
        ? `import styles from './${componentName}.module.${stylesExt}';`
        : `import './${componentName}.${stylesExt}';`}

  type Props = {
    className?: string;
  };

  const getClassNames = (props: Props) => {
    const {className} = props;

    return classnames(styles.${utils_1.lowerCaseString(componentName)}, className);
  };

  const ${componentName} = (props: Props): JSX.Element => {
    const {
      /* destructuring goes here */
    } = props;

    return <div className={getClassNames(props)}>${componentName}</div>;
  };

  export default ${componentName};

  `}\n`;
};
exports.webComponent = webComponent;
exports.default = exports.webComponent;
