import axios from "axios";

const baseURL = "localhost:8000";

export default axios.create({
  baseURL,
});
