"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const fs_1 = require("fs");
const path_1 = require("path");
const inquirer_1 = require("inquirer");
const generateComponent_1 = require("./generateComponent");
const utils_1 = require("./utils");
const program = new commander_1.Command();
program
    .option('-n, --name <name>')
    .option('-d, --destination <destination>')
    .option('-cm, --css-modules', 'should use css modules', false)
    .option('-t, --tests', 'should generate test', false)
    .option('-scss, --scss', 'should generate test', false);
program.parse(process.argv);
const options = program.opts();
console.log('options', options);
const promptQuestions = options.name
    ? []
    : [
        {
            type: 'input',
            name: 'componentName',
            message: () => `What should the new component be named?`,
        },
    ];
inquirer_1.prompt(promptQuestions)
    .then(({ componentName }) => {
    const compName = componentName ? componentName : options.name;
    const capitalizedComponentName = utils_1.capitalizeString(compName);
    const componentDir = path_1.resolve('./', `${options.destination}/${capitalizedComponentName}`);
    if (!fs_1.existsSync(componentDir)) {
        fs_1.mkdirSync(componentDir, {
            recursive: true,
        });
        generateComponent_1.default(Object.assign(Object.assign({}, options), { componentDir, componentName: capitalizedComponentName }));
    }
    else {
        console.log(`\nError:Component with the name '${capitalizedComponentName}' already exists.\n`);
        process.exit(1);
    }
})
    .catch(error => console.error('error', error));
