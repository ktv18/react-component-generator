import {stripIndent} from 'common-tags';

export default (componentName: string): string =>
  stripIndent`
  export { default } from './${componentName}';
\n`;
