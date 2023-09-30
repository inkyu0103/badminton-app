import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "react-feather";

const Header = () => {
  const router = useRouter();
  const isInMenu = router.pathname === "/menu";
  const redirect = (router.query?.redirect ?? "/") as string;

  return (
    <header className="flex justify-between items-center b p-4 bg-base-200">
      <Link href="/">
        <p className="text-xl font-semibold select-none">모두의 배드민턴</p>
      </Link>
      <button className="btn btn-square btn-ghost">
        {isInMenu ? (
          <Link href={redirect}>
            <X />
          </Link>
        ) : (
          <Link href={`/menu?redirect=${redirect}`}>
            <Menu />
          </Link>
        )}
      </button>
    </header>
  );
};

export default Header;
