import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import Input from "../components/Input";
import Button from "../components/Button";
import DatePicker from "../components/DatePicker";

import { add, editData } from "../store/storeData/action";

import { api } from "../service/api";

import { Dayjs } from "dayjs";

import { Box } from "@mui/material";

interface FormData {
  title: string;
  description: string;
  date: Dayjs | null;
  location: string;
  participants: string;
}

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const formDataFromLocation = location.state && location.state.data;

  const { register, handleSubmit, setValue } = useForm<FormData>();
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (formDataFromLocation) {
      setValue("title", formDataFromLocation.title);
      setValue("description", formDataFromLocation.description);
      setValue("date", formDataFromLocation.date);
      setValue("location", formDataFromLocation.location);
      setValue("participants", formDataFromLocation.participants);
    }
  }, [formDataFromLocation, setValue]);

  const onSubmit = (data: FormData) => {
    setFormSubmitted(true);

    if (!selectedDate) {
      return;
    }

    const formattedDate = selectedDate
      ? selectedDate.format("YYYY-MM-DD")
      : null;
    const formDataWithDate = { ...data, date: formattedDate };

    if (location.state && location.state.data) {
      const id = formDataFromLocation.id;

      formDataWithDate.date !== "Invalid Date" &&
        formDataWithDate.date !== null &&
        (async () => {
          try {
            const response = await api.patch(
              `vacation-plans/${id}`,
              formDataWithDate
            );

            dispatch(editData(response.data));
            navigate("/");
          } catch (error) {
            console.error(`Error updating vacation plans: ${error}`);
          }
        })();
    } else {
      formDataWithDate.date !== "Invalid Date" &&
        formDataWithDate.date !== null &&
        (async () => {
          try {
            const response = await api.post("vacation-plans", formDataWithDate);
            dispatch(add(response.data));
            navigate("/");
          } catch (error) {
            console.error(`Error posting vacation plans: ${error}`);
          }
        })();
    }
  };

  return (
    <div className="flex items-start justify-center h-screen mt-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-[#FDF5E6] shadow-lg p-8 rounded-md"
      >
        <Input name="title" register={register} />
        <Input name="description" register={register} />

        <DatePicker
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          formSubmitted={formSubmitted}
        />

        <Input name="location" register={register} />
        <Input name="participants" register={register} />

        <Box display="flex" justifyContent="flex-end">
          {formDataFromLocation ? (
            <Button
              text="edit"
              type="submit"
              classButton="bg-custom-button hover:bg-custom-button text-white font-bold py-2 px-4 rounded"
            />
          ) : (
            <Button
              text="submit"
              type="submit"
              classButton="bg-custom-button hover:bg-custom-button text-white font-bold py-2 px-4 rounded"
            />
          )}
        </Box>
      </form>
    </div>
  );
};

export default Form;
