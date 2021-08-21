"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMergedAnswersWithOptions = exports.subtractOptionsFromQuestions = exports.getStylesImportStr = exports.getStyledComponentStr = exports.getStyledImportStr = exports.getReactImportStr = exports.lowerCaseString = exports.capitalizeString = void 0;
const capitalizeString = (s) => s.charAt(0).toUpperCase() + s.slice(1);
exports.capitalizeString = capitalizeString;
const lowerCaseString = (s) => s.charAt(0).toLowerCase() + s.slice(1);
exports.lowerCaseString = lowerCaseString;
const getReactImportStr = () => `import React from 'react';`;
exports.getReactImportStr = getReactImportStr;
const getStyledImportStr = () => `import styled from 'styled-components';`;
exports.getStyledImportStr = getStyledImportStr;
const getStyledComponentStr = (componentName) => `import {Styled${componentName}} from './${componentName}.styled';`;
exports.getStyledComponentStr = getStyledComponentStr;
const getStylesImportStr = (componentName, options) => {
    const stylesExt = options.scss ? "scss" : "css";
    return options.cssModules
        ? `import styles from './${componentName}.module.${stylesExt}';`
        : `import './${componentName}.${stylesExt}';`;
};
exports.getStylesImportStr = getStylesImportStr;
const subtractOptionsFromQuestions = (options) => {
    const getComponentName = (componentName) => exports.capitalizeString(options.name || componentName || "");
    const getStylesFormat = (stylesFormat) => {
        if (options.scss)
            return "scss";
        return stylesFormat;
    };
    const mappedQuestions = {
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
            message: ({ stylesFormat }) => `should it use ${getStylesFormat(stylesFormat)} modules?`,
        },
        styledComponent: {
            type: "confirm",
            name: "styledComponent",
            message: ({ componentName }) => `should generate ${getComponentName(componentName)}.styled.tsx file?`,
        },
        tests: {
            type: "confirm",
            name: "tests",
            message: ({ componentName }) => `should generate ${getComponentName(componentName)}.test.tsx file?`,
        },
    };
    const keys = Object.keys(mappedQuestions);
    return keys.reduce((acc, val) => {
        if (Boolean(options[val]) === false) {
            acc.push(mappedQuestions[val]);
        }
        return acc;
    }, []);
};
exports.subtractOptionsFromQuestions = subtractOptionsFromQuestions;
const getMergedAnswersWithOptions = (answers, options) => {
    return {
        destination: options.destination || answers.destination,
        name: options.name || answers.componentName,
        scss: options.scss || answers.stylesFormat === "scss",
        cssModules: options.cssModules || Boolean(answers.cssModules),
        styledComponent: options.styledComponent || Boolean(answers.styledComponent),
        tests: options.tests || Boolean(answers.tests),
    };
};
exports.getMergedAnswersWithOptions = getMergedAnswersWithOptions;
