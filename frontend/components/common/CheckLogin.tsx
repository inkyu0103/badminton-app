import { useSlientLoginQuery } from "query/auth/login";

const CheckLogin = ({ children }: { children: JSX.Element }) => {
  useSlientLoginQuery();
  return children;
};

export default CheckLogin;
