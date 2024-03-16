import { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Table from "./components/Table";
import Header from "./components/Header";

import { get } from "./store/storeData/action";
import { StoreData } from "./store/storeData/types";

import { api } from "./service/api";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import AppRoutes from "./routes/routes";

const App = () => {
  const dispatch = useDispatch();

  const data = useSelector((state: StoreData) => state.data.arrayData);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("vacation-plans");
        dispatch(get(response.data));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-screen w-screen">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Router>
          <Header />

          <Routes>
            <Route path="/">
              <Route path="/" element={<Table data={data} />} />
            </Route>
          </Routes>

          <AppRoutes />
        </Router>
      </LocalizationProvider>
    </div>
  );
};

export default App;
