import {stripIndent} from 'common-tags';
import {Options} from 'src/types';
import {lowerCaseString} from '../utils';

export const webComponent = (componentName: string, options: Options): string => {
  const stylesExt = options.scss ? 'scss' : 'css';

  return `${stripIndent`
  import React from 'react';
  import classnames from 'classnames';
  ${
    options.cssModules
      ? `import styles from './${componentName}.module.${stylesExt}';`
      : `import './${componentName}.${stylesExt}';`
  }

  type Props = {
    className?: string;
  };

  const getClassNames = (props: Props) => {
    const {className} = props;

    return classnames(styles.${lowerCaseString(componentName)}, className);
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

export default webComponent;
