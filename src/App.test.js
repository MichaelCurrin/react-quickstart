import { render, screen } from '@testing-library/react';
import App from './App';

test('renders heading', () => {
  render(<App />);
  const header = screen.getByText(/React Quickstart/i);
  expect(header).toBeInTheDocument();
});
