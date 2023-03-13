import { useMutation } from "@tanstack/react-query";
import axios from "query/axios";

interface LoginFormData {
  email: string;
  password: string;
}

const login = async (loginFormData: LoginFormData) => {
  const { data } = await axios.post("/auth/login", {
    ...loginFormData,
  });

  return data;
};

export const useLoginMutation = () =>
  useMutation((loginFormData: LoginFormData) => login(loginFormData));
