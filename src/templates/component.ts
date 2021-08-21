import { stripIndent } from "common-tags";
import { Options } from "src/types";
import {
  getReactImportStr,
  getStyledComponentStr,
  getStylesImportStr,
  lowerCaseString,
} from "../utils";

export const webComponent = (
  componentName: string,
  options: Options
): string => {
  return `${stripIndent`
  ${getReactImportStr()}
  ${options.styledComponent ? getStyledComponentStr(componentName) : ""}
  ${getStylesImportStr(componentName, options)}

  type Props = {};

  const ${componentName} = (props: Props): JSX.Element => {
    const {
      /* destructuring goes here */
    } = props;

    return <div className={styles.${lowerCaseString(
      componentName
    )}}>${componentName}</div>;
  };

  export default ${componentName};

  `}\n`;
};

export default webComponent;
