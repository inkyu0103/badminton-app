import Link from "next/link";
import { useRecoilState } from "recoil";
import { loginState } from "recoil/atoms/loginState";

const Header = () => {
  const [loginUser, setLoginUser] = useRecoilState(loginState);

  return (
    <header className="flex items-center justify-end h-12 px-4 bg-black w-vw gap-x-2">
      {loginUser ? (
        <>
          <Link href="/rackets/yonex" className="text-white">
            Rackets
          </Link>
          <Link href="/emailVerify" className="text-white">
            프로필
          </Link>
          <button className="text-white" onClick={() => setLoginUser(null)}>
            로그아웃
          </button>
        </>
      ) : (
        <>
          <Link href="/rackets/yonex" className="text-white">
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
};
export default Header;
