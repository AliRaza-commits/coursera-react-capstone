import { act, fireEvent, render, screen } from '@testing-library/react';
import { BookingForm, getFromLocalStorage, saveToLocalStorage } from './BookingForm';
import { BookingPage, initializeTimes, updateTimes } from './BookingPage';
import { MemoryRouter } from 'react-router-dom';

const availableTimes = ['18:00', '19:00', '20:00', '21:00', '22:00','23:00'];
const mockDispatch = jest.fn();

test('renders BookingPage Heading',  () => {
  render(<MemoryRouter>
    <BookingPage />
  </MemoryRouter>);
  const heading = screen.getByText("Book Now");
  expect(heading).toBeInTheDocument();
});

test('check initializeTimes return expected values', () => {
  const times = initializeTimes();
  expect(times).toEqual(times);
});

test('updateTimes return same value as provided in state', () => {
  const initialState = ['18:00','19:00','20:00','21:00','22:00','23:00'];
  const action = {type: 'update_time', date: '2024-10-25'};
  const state = updateTimes(initialState, action);
  expect(state).toEqual(state);
});

test('data is saved into localstorage', () => {
  const key = 'booking';
  const value = '2024-11-28 9:00:00';
  saveToLocalStorage(key,value);
  expect(getFromLocalStorage(key)).toEqual(value);
})

test('render BookingForm and check validation error for invalid input', () => {
  render(
    <MemoryRouter>
      <BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />
    </MemoryRouter>
  );
  const submitButton = screen.getByText(/Make Your reservation/i);

  fireEvent.click(submitButton);

  expect(screen.getByText(/please enter date/i)).toBeInTheDocument();
  expect(screen.getByText(/please enter time/i)).toBeInTheDocument();
  expect(screen.getByText(/please enter guest/i)).toBeInTheDocument();
  expect(screen.getByText(/please enter occassion/i)).toBeInTheDocument();
})

test('render BookingForm and check validation error for valid input', () => {
  render(
    <MemoryRouter>
      <BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />
    </MemoryRouter>
  );

  // Find input fields 
  const dateInput = screen.getByLabelText(/choose date/i);
  const timeSelect = screen.getByLabelText(/choose time/i);
  const guestInput = screen.getByLabelText(/number of guests/i);
  const occasionSelect = screen.getByLabelText(/occasion/i);
  const submitButton = screen.getByText(/Make Your reservation/i);

  // Initially, validation messages should be visible
   fireEvent.blur(dateInput); 
   fireEvent.blur(timeSelect); 
   fireEvent.blur(guestInput); 
   fireEvent.blur(occasionSelect);

   expect(screen.getByText(/please enter date/i)).toBeInTheDocument();
   expect(screen.getByText(/please enter time/i)).toBeInTheDocument();
   expect(screen.getByText(/please enter guest/i)).toBeInTheDocument();
   expect(screen.getByText(/please enter occassion/i)).toBeInTheDocument();

  fireEvent.change(dateInput, { target: { value: '2022-12-31' } });
  fireEvent.change(timeSelect, { target: { value: '18:00' } });
  fireEvent.change(guestInput, { target: { value: '4' } });
  fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

  expect(screen.queryByText(/please enter date/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/please enter time/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/please enter guest/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/please enter occassion/i)).not.toBeInTheDocument();

  fireEvent.click(submitButton);
  expect(mockDispatch).toHaveBeenCalled();
})