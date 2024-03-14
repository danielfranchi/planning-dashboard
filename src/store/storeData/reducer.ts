/* eslint-disable @typescript-eslint/no-explicit-any */
import { Data, ArrayData, TypesData } from "./types";

const initialState: ArrayData = {
    arrayData: [],
};

function storeData(state = initialState, action: any) {
    switch (action.type) {
      case TypesData.GET_DATA: {
        
        return {
          arrayData: action.payload,
        };
      }
  
      case TypesData.ADD_DATA: {
        const newArray = [...state.arrayData, action.payload];
  
        return {
          arrayData: newArray,
        };
      }
  
      case TypesData.DELETE_DATA: {
        const id = action.payload;
  
        const newArrayDelete = [...state.arrayData].filter((item: Data) => {
          return item.id !== id;
        });
  
        return {
          arrayData: newArrayDelete,
        };
      }
  
      case TypesData.EDIT_DATA: {
        console.log("action.payload", action.payload)
        const arrayToEdit = [...state.arrayData].filter((n) => {
          return n.id !== action.payload.id;
        });
  
        const newToEdit = [...arrayToEdit, action.payload];
  
        return {
          arrayData: newToEdit,
        };
      }
  
      default: {
        return state;
      }
    }
  }
  
  export default storeData;
  

/* function storeData(state = initialState, action: any) {
  switch (action.type) {
    case TypesData.GET_DATA:
      return {
        arrayData: action.payload,
      };

    case TypesData.ADD_DATA:
      const newArray = [...state.arrayData, action.payload];

      return {
        arrayData: newArray,
      };

    case TypesData.DELETE_DATA:
      const id = action.payload;

      const newArrayDelete = [...state.arrayData].filter((item: Data) => {
        return item.id !== id;
      });

      return {
        arrayData: newArrayDelete,
      };

    case TypesData.EDIT_DATA:
      const arrayToEdit = [...state.arrayData].filter((n) => {
        return n.id !== action.payload.id;
      });

      const newToEdit = [...arrayToEdit, action.payload];

      return {
        arrayData: newToEdit,
      };

    default:
      return state;
  }
}

export default storeData; */
