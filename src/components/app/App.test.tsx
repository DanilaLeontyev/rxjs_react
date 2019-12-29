import React from 'react';
import { render } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import App from './App';

test('renders hello', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('Hello');
  expect(linkElement).toBeInTheDocument();
});

test('let`s render App', () => {
  const component = TestRenderer.create(
    <App />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});