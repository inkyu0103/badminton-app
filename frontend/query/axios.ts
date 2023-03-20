import axios from "axios";

const baseURL = "http://192.168.2.161:8000";

export default axios.create({
  baseURL,
  withCredentials: true,
});
