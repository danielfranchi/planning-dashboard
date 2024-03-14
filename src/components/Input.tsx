import { UseFormRegister } from 'react-hook-form';
import { TextField } from '@mui/material';

interface InputProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>
}

const Input = ({ name, register }: InputProps) => {
  const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <TextField {...register(name, { required: true })} label={capitalizeFirstLetter(name)} fullWidth />
  );
};
export default Input