export enum TypesData {
  GET_DATA = "GET_DATA",
  ADD_DATA = "ADD_DATA",
  DELETE_DATA = "DELETE_DATA",
  EDIT_DATA = "EDIT_DATA",
}

export interface Data {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  participants: string;
}

export interface ArrayData {
  arrayData: Data[];
}

export interface StoreData {
  data: ArrayData;
}
