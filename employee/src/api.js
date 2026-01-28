import axios from "axios";

const api = axios.create({
  baseURL: "http://server:8080"
});

export default api;
