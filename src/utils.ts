import { PromptAnswers, Options, PromptQuestion } from "./types";

export const capitalizeString = (s: string): string =>
  s.charAt(0).toUpperCase() + s.slice(1);

export const lowerCaseString = (s: string): string =>
  s.charAt(0).toLowerCase() + s.slice(1);

export const getReactImportStr = () => `import React from 'react';`;
export const getStyledImportStr = () =>
  `import styled from 'styled-components';`;
export const getStyledComponentStr = (componentName: string) =>
  `import {Styled${componentName}} from './${componentName}.styled';`;

export const getStylesImportStr = (componentName: string, options: Options) => {
  const stylesExt = options.scss ? "scss" : "css";
  return options.cssModules
    ? `import styles from './${componentName}.module.${stylesExt}';`
    : `import './${componentName}.${stylesExt}';`;
};

export const subtractOptionsFromQuestions = (options: Options) => {
  const getComponentName = (componentName?: string) =>
    capitalizeString(options.name || componentName || "");

  const getStylesFormat = (stylesFormat?: string) => {
    if (options.scss) return "scss";
    return stylesFormat;
  };

  const mappedQuestions: Record<keyof Options, PromptQuestion> = {
    destination: {
      type: "input",
      name: "destination",
      message: () => `Type destination path, example: ./src/components`,
    },
    name: {
      type: "input",
      name: "componentName",
      message: () => `What should the new component be named?`,
    },
    scss: {
      type: "list",
      name: "stylesFormat",
      choices: ["css", "scss"],
      message: () => `Which styles format should it use?`,
    },
    cssModules: {
      type: "confirm",
      name: "cssModules",
      message: ({ stylesFormat }) =>
        `should it use ${getStylesFormat(stylesFormat)} modules?`,
    },
    styledComponent: {
      type: "confirm",
      name: "styledComponent",
      message: ({ componentName }) =>
        `should generate ${getComponentName(componentName)}.styled.tsx file?`,
    },
    tests: {
      type: "confirm",
      name: "tests",
      message: ({ componentName }) =>
        `should generate ${getComponentName(componentName)}.test.tsx file?`,
    },
  };

  const keys = Object.keys(mappedQuestions) as Array<keyof Options>;

  return keys.reduce<PromptQuestion[]>((acc, val) => {
    if (Boolean(options[val]) === false) {
      acc.push(mappedQuestions[val]);
    }
    return acc;
  }, []);
};

export const getMergedAnswersWithOptions = (
  answers: PromptAnswers,
  options: Options
): Options => {
  return {
    destination: options.destination || answers.destination!,
    name: options.name || answers.componentName!,
    scss: options.scss || answers.stylesFormat === "scss",
    cssModules: options.cssModules || Boolean(answers.cssModules),
    styledComponent:
      options.styledComponent || Boolean(answers.styledComponent),
    tests: options.tests || Boolean(answers.tests),
  };
};
