import useUser from "hooks/useUser";
import { StrictPropsWithChildren } from "interface/Common.interface";
import Link from "next/link";
import { useLogoutMutation } from "query/auth/logout";

const Header = () => {
  const [isLogin] = useUser();

  const { mutate: handleLogout } = useLogoutMutation();

  return <HeaderView handleLogout={handleLogout} isLogin={isLogin} />;
};
export default Header;

export interface HeaderViewProps {
  handleLogout: () => void;
  isLogin?: boolean;
}

export const HeaderView = ({ handleLogout, isLogin }: HeaderViewProps) => {
  if (!isLogin) {
    return (
      <HeaderBackground>
        <Link href="/rackets/yonex?page=1" className="text-white">
          Rackets
        </Link>
        <Link href="/emailVerify" className="text-white">
          회원가입
        </Link>
        <Link href="/login" className="text-white">
          로그인
        </Link>
      </HeaderBackground>
    );
  }

  return (
    <HeaderBackground>
      <Link href="/rackets/yonex?page=1" className="text-white">
        Rackets
      </Link>
      <Link href="/profile" className="text-white">
        프로필
      </Link>
      <button className="text-white" onClick={handleLogout}>
        로그아웃
      </button>
    </HeaderBackground>
  );
};

const HeaderBackground = ({ children }: StrictPropsWithChildren) => (
  <header className="flex items-center justify-end px-4 py-3 bg-black w-vw gap-x-2">
    {children}
  </header>
);
