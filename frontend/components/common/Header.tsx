import Link from "next/link";

const Header = () => (
  <header className="flex items-center justify-end h-12 px-2 bg-black w-vw">
    <Link href="/login" className="text-white">
      로그인
    </Link>
  </header>
);
export default Header;
