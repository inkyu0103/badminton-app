import Link from "next/link";
import { useLogoutMutation } from "query/auth/logout";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "recoil/atoms/accessToken";

const Header = () => {
  const loginUser = useRecoilValue(accessTokenState);
  const { mutate: handleLogout } = useLogoutMutation();

  const isLogin = loginUser !== "NO_LOGIN" && loginUser !== "PENDING";

  return <HeaderView handleLogout={handleLogout} loginUser={isLogin} />;
};
export default Header;

interface HeaderViewProps {
  handleLogout: () => void;
  loginUser: boolean;
}

export const HeaderView = ({ handleLogout, loginUser }: HeaderViewProps) => (
  <header className="flex items-center justify-end h-12 px-4 bg-black w-vw gap-x-2">
    {loginUser ? (
      <>
        <Link href="/rackets/yonex?page=1" className="text-white">
          Rackets
        </Link>
        <Link href="/emailVerify" className="text-white">
          프로필
        </Link>
        <button className="text-white" onClick={handleLogout}>
          로그아웃
        </button>
      </>
    ) : (
      <>
        <Link href="/rackets/yonex?page=1" className="text-white">
          Rackets
        </Link>
        <Link href="/emailVerify" className="text-white">
          회원가입
        </Link>
        <Link href="/login" className="text-white">
          로그인
        </Link>
      </>
    )}
  </header>
);
