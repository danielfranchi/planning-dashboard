/* import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'

import storeData from './storeData/reducer'


const createRootReducer = () => combineReducers({
  data: storeData
})

const store = createStore(createRootReducer(), composeWithDevTools())

export { store } */


import { configureStore } from '@reduxjs/toolkit';
import storeData from './storeData/reducer';

const rootReducer = {
  data: storeData
};

const store = configureStore({
  reducer: rootReducer
});

export { store };
