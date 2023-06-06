import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { userState } from "recoil/atoms/user";

const ProfilePage = () => {
  const user = useRecoilValue(userState);
  const router = useRouter();
  if (!user) {
    router.push("/login");
    return null;
  }

  return <div>흠..?</div>;
};

const CSRProfilePage = dynamic(() => Promise.resolve(ProfilePage), {
  ssr: false,
  loading: () => <div>로딩중...</div>,
});

export default CSRProfilePage;
