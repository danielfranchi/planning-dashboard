import { configureStore } from "@reduxjs/toolkit";
import storeData from "./storeData/reducer";

const rootReducer = {
  data: storeData,
};

const store = configureStore({
  reducer: rootReducer,
});

export { store };
