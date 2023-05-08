import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // update test from regEx to literal string
  const linkElement = screen.getByText('Learn React');
  expect(linkElement).toBeInTheDocument();
});
