import Button from "./Button";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/");
  };

  return (
    <header className="bg-[#435d7d] text-white flex items-center justify-between p-4 sm:p-6 md:p-8">
      <h1
        className="text-2xl sm:text-3xl md:text-4xl cursor-pointer"
        onClick={redirect}
      >
        Vacation Plan 2024
      </h1>
      <Button text="Add vacation plan" />
    </header>
  );
};

export default Header;
