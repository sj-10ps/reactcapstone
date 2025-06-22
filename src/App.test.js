// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

test('renders App component with expected text', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const heading = screen.getByText(/Little Lemon/i); // Adjust this text to match your app
  expect(heading).toBeInTheDocument();
});
