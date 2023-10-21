import { Auth } from "aws-amplify";
import { useAuth } from "hooks/useAuth";
import Link from "next/link";

const Menu = () => {
  const auth = useAuth();

  return (
    <div>
      <ul className="menu text-lg">
        <li>
          <Link href="">라켓 보러가기</Link>
          <ul>
            <li>
              <Link href="/rackets/yonex">요넥스</Link>
            </li>
          </ul>
        </li>
        {auth === "authenticated" ? (
          <li onClick={async () => await Auth.signOut()}>
            <div>로그아웃</div>
          </li>
        ) : (
          <li>
            <Link href="/login">로그인</Link>
          </li>
        )}
      </ul>
    </div>
  );
};
export default Menu;
