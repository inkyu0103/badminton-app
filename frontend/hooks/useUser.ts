import { useQueryClient } from "@tanstack/react-query";
import { ILoginResponse } from "interface/User.interface";
import { isNil } from "lodash";
import { queryKeys } from "query/queryKeys";

type ReturnType = [boolean, ILoginResponse["user"] | undefined];

const useUser = (): ReturnType => {
  const queryClient = useQueryClient();
  const loginResponse = queryClient.getQueryData<ILoginResponse>(
    queryKeys.auth.tokenState,
  );

  const isLogin = !isNil(loginResponse);

  return [isLogin, loginResponse?.user];
};
export default useUser;
