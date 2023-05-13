import GithubIcon from "components/icons/GithubIcon";
import MailIcon from "components/icons/MailIcon";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-between w-full px-4 py-10 bg-black">
      <p className="text-xl font-semibold text-white">모두의 배드민턴</p>
      <div className="flex gap-x-1">
        <Link target="_blank" href="https://github.com/inkyu0103">
          <GithubIcon />
        </Link>
        <Link href="mailto:inkyu0103@gmail.com">
          <MailIcon />
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
