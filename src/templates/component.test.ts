import {stripIndent} from 'common-tags';

export const test = (componentName: string): string =>
  `${stripIndent`
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

export default test;
