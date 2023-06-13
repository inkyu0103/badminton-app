import { StrictPropsWithChildren } from "interface/Common.interface";
import { useSilentLoginQuery } from "query/auth/login";

const CheckLogin = ({ children }: StrictPropsWithChildren) => {
  useSilentLoginQuery();
  return children;
};

export default CheckLogin;
