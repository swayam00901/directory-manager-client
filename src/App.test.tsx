import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the App component', () => {
  render(<App />);
  
  // Example test case: Check if a specific element is present
  const headerElement = screen.getByText(/welcome to my app/i);
  expect(headerElement).toBeInTheDocument();

  // Example test case: Check if a button is present
  const buttonElement = screen.getByRole('button', { name: /click me/i });
  expect(buttonElement).toBeInTheDocument();
  
  // Example test case: Check if a specific link is present
  const linkElement = screen.getByText(/learn more/i);
  expect(linkElement).toBeInTheDocument();
});