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
        <Link href="/rackets/yonex?page=1" className="font-bold text-white">
          Rackets
        </Link>
        <Link href="/emailVerify" className="font-bold text-white">
          회원가입
        </Link>
        <Link href="/login" className="font-bold text-white">
          로그인
        </Link>
      </HeaderBackground>
    );
  }

  return (
    <HeaderBackground>
      <Link href="/rackets/yonex?page=1" className="font-bold text-white">
        Rackets
      </Link>
      <Link href="/profile" className="font-bold text-white">
        프로필
      </Link>
      <button className="font-bold text-white" onClick={handleLogout}>
        로그아웃
      </button>
    </HeaderBackground>
  );
};

const HeaderBackground = ({ children }: StrictPropsWithChildren) => (
  <header className="flex items-center justify-between px-4 py-3 bg-black w-vw ">
    <Link href={(process.env.NEXT_PUBLIC_URL as string) ?? "#"}>
      <p className="text-xl font-bold text-white">모두의 배드민턴</p>
    </Link>
    <div className="flex gap-x-2">{children}</div>
  </header>
);
