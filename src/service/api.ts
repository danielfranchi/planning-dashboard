import axios from "axios";

export const api = axios.create({
  baseURL: "https://planning-dashboard-a0bf29b4457a.herokuapp.com/",
});
