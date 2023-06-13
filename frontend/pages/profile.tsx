import ProfileSkeleton from "components/users/ProfileSkeleton";
import { GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";

const Profile = dynamic(() => import("components/users/Profile"), {
  loading: () => <ProfileSkeleton />,
  ssr: false,
});

const ProfilePage = () => <Profile />;

export default ProfilePage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;

  if (!req.headers.cookie) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return { props: {} };
}
