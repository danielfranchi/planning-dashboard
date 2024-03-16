import { Routes, Route } from "react-router-dom";

import Form from "../pages/Form";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/form" element={<Form />} />
    </Routes>
  );
};

export default AppRoutes;
