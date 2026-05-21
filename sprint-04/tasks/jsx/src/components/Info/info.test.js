import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Info from './';

it('Renders without crashing', () => {
  const { getByTestId } = render(<Info />);
  expect(getByTestId('element-info')).toBeInTheDocument();
});

it('Renders Info correctly', () => {
  const { getByTestId } = render(<Info />);
  expect(getByTestId('element-info')).toHaveTextContent(
    "JSX produces React 'elements'",
  );
});
