
import { render, fireEvent } from '@testing-library/react';
import { useForm } from "react-hook-form";
import Input from "../components/Input";

describe('Input', () => {
  it('renders the Input and responds to input events', () => {
    const TestComponent = () => {
      const { register } = useForm();
      return <Input name="test" register={register} />;
    };

    const { getByLabelText } = render(<TestComponent />);

    const input = getByLabelText('Test') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Test value' } });

    expect(input.value).toBe('Test value');
  });
});
