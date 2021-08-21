import { stripIndent } from "common-tags";
import { getReactImportStr, getStyledImportStr } from "../utils";

export const styledComponent = (componentName: string): string => {
  return `${stripIndent`
  ${getReactImportStr()}
  ${getStyledImportStr()}

  export const Styled${componentName} = styled.div\`
    width: 100%;
  \`;
  `}\n`;
};

export default styledComponent;
