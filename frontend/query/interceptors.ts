import axios from "query/axios";

export const setBearerToken = (token: string) => {
  axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export const removeBearerToken = () => {
  axios.interceptors.request.clear();
};
