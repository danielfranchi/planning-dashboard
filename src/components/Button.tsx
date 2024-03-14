import { useNavigate } from "react-router-dom";

interface ButtonText {
  text: string;
  type?: "submit" | "reset" | "button";

  classButton?: string;
  disabled?: boolean;
}

const Button = ({ text, type, classButton, disabled }: ButtonText) => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const eventButton = event.target as HTMLButtonElement;

    console.log(eventButton.innerText);

    eventButton.innerText === "Add vacation plan" && navigate("/form");
  };

  return (
    <button
      className={
        classButton
          ? classButton
          : "bg-[#FDF5E6] text-[#435d7d] rounded px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4"
      }
      onClick={handleClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
