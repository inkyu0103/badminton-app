import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import axios from "query/axios";
import { queryKeys } from "query/queryKeys";

interface Token {
  email: string;
  iat: number;
  exp: number;
}

export const verifyEmailToken = async (token: string) => {
  const { data } = await axios.get(`/auth/verify-token/${token}`);
  return data;
};

export const useVerifyTokenQuery = () => {
  const router = useRouter();

  return useQuery<Token>(
    queryKeys.auth.emailToken(router.query?.token),
    () => verifyEmailToken(router.query?.token),
    {
      suspense: true,
      enabled: !!router.query?.token,
      retry: false,
    },
  );
};
