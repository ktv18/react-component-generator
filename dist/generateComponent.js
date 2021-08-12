"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
// Templates
const component_1 = require("./templates/component");
const component_test_1 = require("./templates/component.test");
const component_module_1 = require("./templates/component.module");
const templates_1 = require("./templates");
const generateComponent = (args) => fs_1.writeFileSync(path_1.join(args.componentDir, `${args.componentName}.tsx`), component_1.default(args.componentName, args));
const generateTest = (args) => fs_1.writeFileSync(path_1.join(args.componentDir, `${args.componentName}.test.tsx`), component_test_1.default(args.componentName));
const generateStyles = (args) => {
    const fileExt = args.scss ? "scss" : "css";
    const fileName = args.cssModules
        ? `${args.componentName}.module.${fileExt}`
        : `${args.componentName}.${fileExt}`;
    fs_1.writeFileSync(path_1.join(args.componentDir, fileName), component_module_1.default(args.componentName));
};
const generateEntry = (args) => fs_1.writeFileSync(path_1.join(args.componentDir, `index.ts`), templates_1.default(args.componentName));
const componentTasks = [generateComponent, generateStyles, generateEntry];
exports.default = (args) => {
    if (args.tests) {
        componentTasks.push(generateTest);
    }
    componentTasks.forEach((task) => task(args));
};
