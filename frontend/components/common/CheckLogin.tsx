import { ReturnChildrenProps } from "interface/Common.interface";
import { useSilentLoginQuery } from "query/auth/login";

const CheckLogin = ({ children }: ReturnChildrenProps) => {
  useSilentLoginQuery();
  return children;
};

export default CheckLogin;
