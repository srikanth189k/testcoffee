import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /welcome to my react app!/i });
  expect(heading).toBeInTheDocument();
});
