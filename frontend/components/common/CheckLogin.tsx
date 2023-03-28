import { useSilentLoginQuery } from "query/auth/login";

const CheckLogin = ({ children }: { children: JSX.Element }) => {
  useSilentLoginQuery();
  return children;
};

export default CheckLogin;
