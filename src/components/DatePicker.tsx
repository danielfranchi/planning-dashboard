import { Dispatch, SetStateAction, useMemo, useState } from "react";

import dayjs, { Dayjs } from "dayjs";

import { DateField, DateValidationError } from "@mui/x-date-pickers";

interface DatePickerProps {
  selectedDate: Dayjs | null;
  setSelectedDate: Dispatch<SetStateAction<Dayjs | null>>;
  formSubmitted: boolean;
}

const DatePicker = ({
  selectedDate,
  setSelectedDate,
  formSubmitted,
}: DatePickerProps) => {
  const minDate = dayjs("2000-01-01");

  const [error, setError] = useState<DateValidationError | null>(null);
  const [touched, setTouched] = useState<boolean>(false);

  const errorMessage = useMemo(() => {
    if (!touched && !formSubmitted) return "";

    if (!selectedDate) {
      return "Please select a date.";
    }

    switch (error) {
      case "invalidDate": {
        return "Invalid date";
      }
      default: {
        return "";
      }
    }
  }, [error, touched, formSubmitted, selectedDate]);

  const handleChange = (newDate: Dayjs | null) => {
    const year = newDate ? newDate.year().toString() : undefined;

    if (
      !newDate ||
      newDate.isBefore(minDate) ||
      newDate.year() !== 2024 ||
      !year ||
      year.length !== 4 ||
      year !== "2024"
    ) {
      setError("invalidDate");
      setSelectedDate(null);
    } else {
      setError(null);
      setSelectedDate(newDate ? dayjs(newDate) : null);
    }
    setTouched(true);
  };

  return (
    <DateField
      label="Select a date"
      value={selectedDate || null}
      onChange={handleChange}
      minDate={minDate}
      fullWidth
      onError={(newError) => setError(newError)}
      slotProps={{
        textField: {
          helperText: errorMessage,
          error: !!errorMessage,
        },
      }}
      onFocus={() => setSelectedDate(null)}
    />
  );
};

export default DatePicker;
