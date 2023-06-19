import { useQueryClient } from "@tanstack/react-query";
import { StrictPropsWithChildren } from "interface/Common.interface";
import { ILoginResponse } from "interface/User.interface";
import { setBearerToken } from "query/interceptors";
import { queryKeys } from "query/queryKeys";

const CheckLogin = ({ children }: StrictPropsWithChildren): JSX.Element => {
  const queryClient = useQueryClient();

  const data = queryClient.getQueryData<ILoginResponse | null>(
    queryKeys.auth.tokenState,
  );

  if (data?.accessToken) {
    setBearerToken(data.accessToken);
  }

  return children;
};

export default CheckLogin;
