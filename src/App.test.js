import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello world', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello world/i);
  expect(linkElement).toBeInTheDocument();
});
