import { NextPage } from "next";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { userState } from "recoil/atoms/user";

export const OnlyPublicRoute = (Component: NextPage) => {
  const PublicRoute = () => {
    const router = useRouter();
    const user = useRecoilValue(userState);

    if (user) {
      router.push("/");
      return null;
    }

    return <Component />;
  };

  return PublicRoute;
};
