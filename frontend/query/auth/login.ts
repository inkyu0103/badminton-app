import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import axios from "query/axios";
import { setBearerToken } from "query/interceptors";
import { useSetRecoilState } from "recoil";
import { loginState } from "recoil/atoms/loginState";

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
  const setLoginState = useSetRecoilState(loginState);

  return useMutation((loginFormData: LoginFormData) => login(loginFormData), {
    onSuccess: (data) => {
      setBearerToken(data.access_token);
      setLoginState(true);
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
