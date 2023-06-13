import { StrictPropsWithChildren } from "interface/Common.interface";
import Link from "next/link";
import { useLogoutMutation } from "query/auth/logout";
import { useRecoilValue } from "recoil";
import { LoginState, loginStateAtom } from "recoil/atoms/loginState";

const Header = () => {
  const loginState = useRecoilValue(loginStateAtom);
  const { mutate: handleLogout } = useLogoutMutation();

  return <HeaderView handleLogout={handleLogout} loginState={loginState} />;
};
export default Header;

export interface HeaderViewProps {
  handleLogout: () => void;
  loginState: LoginState;
}

export const HeaderView = ({ handleLogout, loginState }: HeaderViewProps) => {
  if (loginState === LoginState.PENDING) {
    return (
      <HeaderBackground>
        <div className="h-6 rounded animation-pulse w-14 bg-slate-700" />
        <div className="h-6 rounded animation-pulse w-14 bg-slate-700" />
        <div className="h-6 rounded animation-pulse w-14 bg-slate-700" />
      </HeaderBackground>
    );
  }

  if (loginState === LoginState.NO_LOGIN) {
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
