import {Command} from 'commander';
import {existsSync, mkdirSync} from 'fs';
import {resolve} from 'path';
import {prompt} from 'inquirer';
import generateComponent from './generateComponent';
import {capitalizeString} from './utils';
import {Options} from './types';

const program = new Command();

program
  .option('-n, --name <name>')
  .option('-d, --destination <destination>')
  .option('-cm, --css-modules', 'should use css modules', false)
  .option('-t, --tests', 'should generate test', false)
  .option('-scss, --scss', 'should generate test', false);

program.parse(process.argv);
const options = program.opts<Options>();

console.log('options', options);

type PromptQuestions = {
  componentName?: string;
};

const promptQuestions = options.name
  ? []
  : [
      {
        type: 'input',
        name: 'componentName',
        message: () => `What should the new component be named?`,
      },
    ];

prompt<PromptQuestions>(promptQuestions)
  .then(({componentName}) => {
    const compName = componentName ? componentName : options.name;
    const capitalizedComponentName = capitalizeString(compName);
    const componentDir = resolve('./', `${options.destination}/${capitalizedComponentName}`);

    if (!existsSync(componentDir)) {
      mkdirSync(componentDir, {
        recursive: true,
      });
      generateComponent({
        ...options,
        componentDir,
        componentName: capitalizedComponentName,
      });
    } else {
      console.log(
        `\nError:Component with the name '${capitalizedComponentName}' already exists.\n`
      );
      process.exit(1);
    }
  })
  .catch(error => console.error('error', error));
