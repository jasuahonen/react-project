import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Shopping List Heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Shopping List/i);
  expect(linkElement).toBeInTheDocument();
});
