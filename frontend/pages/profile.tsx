import Profile from "components/users/Profile";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { userState } from "recoil/atoms/user";

const ProfilePage: NextPage = () => {
  const user = useRecoilValue(userState);
  const router = useRouter();

  if (user) {
    return <Profile />;
  }

  router.push("/login");
  return null;
};

const CSRProfilePage = dynamic(() => Promise.resolve(ProfilePage), {
  ssr: false,
  loading: () => <div></div>,
});

export default CSRProfilePage;
