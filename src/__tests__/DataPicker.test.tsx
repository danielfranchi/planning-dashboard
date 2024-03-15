
import { render } from '@testing-library/react';
import DatePicker from "../components/DatePicker";
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";


describe('DatePicker', () => {
  it('renders the DatePicker', () => {
    const setSelectedDate = jest.fn();
    const selectedDate = dayjs();
    const formSubmitted = false;

    const { getByLabelText } = render(
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker 
          selectedDate={selectedDate} 
          setSelectedDate={setSelectedDate} 
          formSubmitted={formSubmitted} 
        />
      </LocalizationProvider>
    );

    const datePicker = getByLabelText('Select a date');
    expect(datePicker).toBeInTheDocument();
  });
});
