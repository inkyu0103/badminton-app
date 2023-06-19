import { useQueryClient } from "@tanstack/react-query";
import { ILoginResponse } from "interface/User.interface";
import { setBearerToken } from "query/interceptors";
import { queryKeys } from "query/queryKeys";

const useAccessTokenInject = () => {
  const queryClient = useQueryClient();

  const data = queryClient.getQueryData<ILoginResponse | null>(
    queryKeys.auth.tokenState,
  );

  if (data?.accessToken) {
    setBearerToken(data.accessToken);
  }
};
export default useAccessTokenInject;
