import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import axios from "query/axios";
import { removeBearerToken } from "query/interceptors";
import { queryKeys } from "query/queryKeys";

const logout = async () => {
  const { data } = await axios.post("/auth/logout");
  return data;
};

export const useLogoutMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation(() => logout(), {
    onSuccess: () => {
      removeBearerToken();
      queryClient.removeQueries({
        queryKey: queryKeys.auth.tokenState,
        exact: true,
      });
      router.push("/");
    },
    onError: () => {},
  });
};
