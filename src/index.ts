#!/usr/bin/env node

import { Command } from "commander";
import { existsSync, mkdirSync } from "fs";
import { resolve } from "path";
import { prompt } from "inquirer";
import generateComponent from "./generateComponent";
import {
  capitalizeString,
  subtractOptionsFromQuestions,
  getMergedAnswersWithOptions,
} from "./utils";
import { PromptAnswers, Options } from "./types";

const program = new Command();

program
  .option("-n, --name <name>")
  .option("-d, --destination <destination>")
  .option("-cm, --css-modules", "should use css modules", false)
  .option("-t, --tests", "should generate test", false)
  .option("-scss, --scss", "should use scss", false)
  .option("-sc, --styled-component", "should generate styled component", false);

program.parse(process.argv);
const options = program.opts<Options>();

const promptQuestions = subtractOptionsFromQuestions(options);

prompt<PromptAnswers>(promptQuestions)
  .then((answers) => {
    const mergedAnswersWithOptions = getMergedAnswersWithOptions(
      answers,
      options
    );
    const capitalizedComponentName = capitalizeString(
      mergedAnswersWithOptions.name
    );
    const componentDir = resolve(
      "./",
      `${mergedAnswersWithOptions.destination}/${capitalizedComponentName}`
    );

    if (!existsSync(componentDir)) {
      mkdirSync(componentDir, {
        recursive: true,
      });
      generateComponent({
        ...mergedAnswersWithOptions,
        componentDir,
        componentName: capitalizedComponentName,
      });

      console.log(
        `${capitalizedComponentName} has been successfully generated`
      );
    } else {
      console.log(
        `\nError:Component with the name '${capitalizedComponentName}' already exists.\n`
      );
      process.exit(1);
    }
  })
  .catch((error) => console.error("error", error));
