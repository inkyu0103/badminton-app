import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import useMounted from "hooks/useMounted";
import { useRouter } from "next/router";
import axios from "query/axios";
import { setBearerToken, removeBearerToken } from "query/interceptors";
import { queryKeys } from "query/queryKeys";
import { useRecoilState, useSetRecoilState } from "recoil";
import { accessTokenState, LoginState } from "recoil/atoms/accessToken";

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
  const setAccessTokenState = useSetRecoilState(accessTokenState);

  return useMutation((loginFormData: LoginFormData) => login(loginFormData), {
    onSuccess: (data) => {
      setBearerToken(data.access_token);
      setAccessTokenState(data.access_token);
      router.push("/");
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

const silentLogin = async () => {
  const { data } = await axios.get("/auth/validate-token");
  return data;
};

export const useSilentLoginQuery = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  return useQuery(queryKeys.auth.tokenState, silentLogin, {
    onSuccess: (data) => {
      setAccessToken(data);
      setBearerToken(data);
    },
    onError: () => {
      setAccessToken(LoginState["NO_LOGIN"]);
      removeBearerToken();
    },
    enabled: accessToken === LoginState["PENDING"],
    retry: false,
  });
};
