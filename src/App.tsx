

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import AppRoutes from './routes/routes';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {api} from "./service/api"

import {get} from "./store/storeData/action"
import { StoreData } from './store/storeData/types';
import Table from './components/Table';
/* import { store } from './store/store'; */

const App = () => {
  const dispatch = useDispatch();

  const data = useSelector((state: StoreData) => state.data.arrayData);

  console.log("dataApp", data)

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("vacation-plans");
        dispatch(get(response.data));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    })();
  }, []);
  

  return (
    <div className="h-screen w-screen">
      

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Router>
          <Header />

          <Routes>
          <Route path="/">
            {/* <Table data={data} /> */}
            <Route path="/" element={<Table data={data} />} />
          </Route>
          </Routes>



          <AppRoutes />

        {/* <Table data={data} /> */}
          
        </Router>
        
      </LocalizationProvider>
     {/* <Table data={data} /> */}
    </div>
  )
}

export default App;
