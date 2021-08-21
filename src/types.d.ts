import { QuestionCollection } from "inquirer";

export type Options = {
  name: string;
  destination: string;
  scss: boolean;
  cssModules: boolean;
  styledComponent: boolean;
  tests: boolean;
};

export type PromptQuestion = {
  name: string;
  type: string;
  choices?: string[];
  message: (args: Partial<PromptAnswers>) => string;
};

export type PromptAnswers = {
  destination?: string;
  componentName?: string;
  stylesFormat?: string;
  cssModules?: boolean;
  styledComponent?: boolean;
  tests?: boolean;
};
