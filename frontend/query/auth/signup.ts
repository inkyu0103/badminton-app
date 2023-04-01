import { useMutation } from "@tanstack/react-query";
import { CreateUser, FormattedCreateUser } from "interface/User.interface";
import { useRouter } from "next/router";
import axios from "query/axios";
import { setBearerToken } from "query/interceptors";
import { useSetRecoilState } from "recoil";
import { accessTokenState } from "recoil/atoms/accessToken";

const genderMapper = Object.freeze({
  남성: "MALE",
  여성: "FEMALE",
});

const userFormatter = ({
  passwordConfirm,
  ...args
}: CreateUser): FormattedCreateUser => ({
  ...args,
  gender: genderMapper[args.gender],
  birthday: args.birthday.toISOString(),
});

const signup = async (user: CreateUser) => {
  const { data } = await axios.post("/auth/signup", {
    ...userFormatter(user),
  });
  return data;
};

const useSignupMutation = () => {
  const router = useRouter();
  const setAccessTokenState = useSetRecoilState(accessTokenState);

  return useMutation((user: CreateUser) => signup(user), {
    onSuccess: (data) => {
      setBearerToken(data.access_token);
      setAccessTokenState(data.access_token);
      router.push("/");
    },
  });
};

export default useSignupMutation;
