"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const common_tags_1 = require("common-tags");
const test = (componentName) => `${common_tags_1.stripIndent `
  import React from 'react';
  import {render, screen} from '@testing-library/react';
  import ${componentName} from './${componentName}';

  describe('<${componentName} />', function () {
    it('should render', function () {
      render(<${componentName} />);

      expect(screen.getByText('${componentName}')).toBeInTheDocument();
    });
  });

  `}\n`;
exports.test = test;
exports.default = exports.test;
