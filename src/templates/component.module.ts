import {stripIndent} from 'common-tags';
import {lowerCaseString} from '../utils';

const webStyles = (componentName: string): string =>
  `${stripIndent`
  .${lowerCaseString(componentName)} {}

  `}\n`;

export default webStyles;
