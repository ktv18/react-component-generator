import { writeFileSync } from "fs";
import { join } from "path";
// Templates
import component from "./templates/component";
import componentTest from "./templates/component.test";
import styles from "./templates/component.module";
import entry from "./templates";
import { Options } from "./types";

type CreateComponentArgs = Options & {
  componentDir: string;
  componentName: string;
};

const generateComponent = (args: CreateComponentArgs) =>
  writeFileSync(
    join(args.componentDir, `${args.componentName}.tsx`),
    component(args.componentName, args)
  );

const generateTest = (args: CreateComponentArgs) =>
  writeFileSync(
    join(args.componentDir, `${args.componentName}.test.tsx`),
    componentTest(args.componentName)
  );

const generateStyles = (args: CreateComponentArgs) => {
  const fileExt = args.scss ? "scss" : "css";
  const fileName = args.cssModules
    ? `${args.componentName}.module.${fileExt}`
    : `${args.componentName}.${fileExt}`;
  writeFileSync(join(args.componentDir, fileName), styles(args.componentName));
};

const generateEntry = (args: CreateComponentArgs) =>
  writeFileSync(join(args.componentDir, `index.ts`), entry(args.componentName));

const componentTasks = [
  generateComponent,
  generateTest,
  generateStyles,
  generateEntry,
];

export default (args: CreateComponentArgs): void => {
  componentTasks.forEach((task) => task(args));
};
