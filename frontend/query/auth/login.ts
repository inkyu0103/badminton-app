import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ILoginResponse } from "interface/User.interface";
import { useRouter } from "next/router";
import axios from "query/axios";
import { setBearerToken } from "query/interceptors";
import { queryKeys } from "query/queryKeys";

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

export const useLoginMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation((loginFormData: LoginFormData) => login(loginFormData), {
    onSuccess: (data) => {
      setBearerToken(data.accessToken);
      queryClient.setQueryData(queryKeys.auth.tokenState, data);
      router.push(sessionStorage.getItem("prevPath") || "/");
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === 500) {
        alert("서버에 문제가 발생하였습니다.");
      } else {
        alert("로그인에 실패하였습니다.");
      }
    },
  });
};

export const silentLogin = async (
  cookie: string | undefined,
): Promise<null | ILoginResponse> => {
  if (cookie) {
    axios.defaults.headers.Cookie = cookie;
  }

  try {
    const { data } = await axios.get("/auth/validate-token", {
      withCredentials: true,
    });
    return data;
  } catch (e: unknown) {
    if (e instanceof AxiosError && e.response?.status === 401) {
      /* eslint-disable no-console */
      console.error("Token is not validated");
    }
    return null;
  }
};
