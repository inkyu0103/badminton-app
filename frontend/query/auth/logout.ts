import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import axios from "query/axios";
import { removeBearerToken } from "query/interceptors";
import { useSetRecoilState } from "recoil";
import { accessTokenState, LoginState } from "recoil/atoms/accessToken";
import { userState } from "recoil/atoms/user";

const logout = async () => {
  const { data } = await axios.post("/auth/logout");
  return data;
};

export const useLogoutMutation = () => {
  const router = useRouter();
  const setAccessTokenState = useSetRecoilState(accessTokenState);
  const setUserState = useSetRecoilState(userState);

  return useMutation(() => logout(), {
    onSuccess: () => {
      removeBearerToken();
      setAccessTokenState(LoginState["NO_LOGIN"]);
      setUserState(null);
      router.push("/");
    },
    onError: () => {},
  });
};
