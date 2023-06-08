import ProfileSkeleton from "components/users/ProfileSkeleton";
import dynamic from "next/dynamic";
import { useRecoilValue } from "recoil";
import { userState } from "recoil/atoms/user";

const Profile = dynamic(() => import("components/users/Profile"), {
  loading: () => <ProfileSkeleton />,
  ssr: false,
});

const ProfilePage = () => {
  const user = useRecoilValue(userState);

  if (user) {
    return <Profile />;
  }

  return <div className="h-full" />;
};

export default ProfilePage;
