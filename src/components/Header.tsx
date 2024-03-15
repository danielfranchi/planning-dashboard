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
        className="text-lg sm:text-xl md:text-2xl cursor-pointer"
        onClick={redirect}
      >
        Vacation Plan
      </h1>
      <Button text="Add vacation plan" />
    </header>
  );
};

export default Header;
