import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test.skip('renders website title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Body Composition/i);
  expect(linkElement).toBeInTheDocument();
});
