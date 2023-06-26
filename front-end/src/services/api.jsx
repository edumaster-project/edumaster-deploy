import axios from "axios";

const connection = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_BASE_URL,
});

export default connection;
