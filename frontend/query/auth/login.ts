import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import axios from "query/axios";
import { removeBearerToken, setBearerToken } from "query/interceptors";
import { queryKeys } from "query/queryKeys";
import { useRecoilState, useSetRecoilState } from "recoil";
import { LoginState, loginStateAtom } from "recoil/atoms/loginState";
import { userState } from "recoil/atoms/user";

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
  const setAccessTokenState = useSetRecoilState(loginStateAtom);
  const setUserState = useSetRecoilState(userState);

  return useMutation((loginFormData: LoginFormData) => login(loginFormData), {
    onSuccess: (data) => {
      setBearerToken(data.accessToken);
      setAccessTokenState(LoginState.LOGGED_IN);
      setUserState(data.user);
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

const silentLogin = async () => {
  const { data } = await axios.get("/auth/validate-token");
  return data;
};

export const useSilentLoginQuery = () => {
  const [accessToken, setAccessToken] = useRecoilState(loginStateAtom);
  const setUserState = useSetRecoilState(userState);

  return useQuery(queryKeys.auth.tokenState, silentLogin, {
    onSuccess: (data) => {
      setAccessToken(data.accessToken);
      setBearerToken(data.accessToken);
      setUserState(data.user);
    },
    onError: () => {
      setAccessToken(LoginState.NO_LOGIN);
      removeBearerToken();
      setUserState(null);
    },
    enabled: accessToken === LoginState.PENDING,
    retry: false,
  });
};
