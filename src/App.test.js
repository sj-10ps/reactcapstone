// src/App.test.js
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Booking from './Booking';




test('renders BookingForm heading', () => {
  render(
    <BrowserRouter>
      <Booking />
    </BrowserRouter>
  );

  const heading = screen.getByText(/Book Now/i);
  expect(heading).toBeInTheDocument();
});


test('render date input',()=>{
    render(<BrowserRouter><Booking/></BrowserRouter>)
    const date=screen.getByLabelText(/Choose date/i)
    expect(date).toBeInTheDocument()
})

const mockDispatch = jest.fn();

test('date input has required attribute', () => {
  render(<BrowserRouter><Booking avaialbletimes={[]} dispatch={mockDispatch} /></BrowserRouter>);
  const dateInput = screen.getByLabelText(/Choose date/i);
  expect(dateInput).toBeRequired();
});

test('guest input has min and max attributes', () => {
  render(<BrowserRouter><Booking avaialbletimes={[]} dispatch={mockDispatch} /></BrowserRouter>);
  const guestInput = screen.getByLabelText(/Number of guests/i);
  expect(guestInput).toHaveAttribute('min', '1');
  expect(guestInput).toHaveAttribute('max', '10');
});
