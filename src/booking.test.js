import { getByLabelText, render, screen } from '@testing-library/react';
import Booking from './Booking';
import { BrowserRouter } from 'react-router-dom'; 
import '@testing-library/jest-dom';

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
