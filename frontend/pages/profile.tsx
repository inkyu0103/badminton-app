import ProfileSkeleton from "components/users/ProfileSkeleton";
import dynamic from "next/dynamic";

const Profile = dynamic(() => import("components/users/Profile"), {
  loading: () => <ProfileSkeleton />,
  ssr: false,
});

const ProfilePage = () => {
  return <Profile />;
};

export default ProfilePage;
