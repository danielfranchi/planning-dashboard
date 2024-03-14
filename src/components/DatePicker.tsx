import { DateField, DateValidationError } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { Dispatch, SetStateAction, useMemo, useState } from "react";

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
  const minDate = dayjs("2000-01-01"); // Início do ano 2000

  const [error, setError] = useState<DateValidationError | null>(null);
  const [touched, setTouched] = useState<boolean>(false);

  const errorMessage = useMemo(() => {
    if (!touched && !formSubmitted) return "";

    if (!selectedDate) {
      return "Por favor, selecione uma data.";
    }

    switch (error) {
      case "invalidDate": {
        return "Data inválida";
      }
      default: {
        return "";
      }
    }
  }, [error, touched, formSubmitted, selectedDate]);

  const handleChange = (newDate: Dayjs | null) => {
    if (!newDate || newDate.isBefore(minDate)) {
      setError("invalidDate");
    } else {
      setError(null);
      setSelectedDate(newDate ? dayjs(newDate) : null);
    }
    setTouched(true); // Define que o campo foi tocado ao interagir com ele
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
