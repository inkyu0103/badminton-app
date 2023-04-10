import type { NextPage } from "next";
import MainGreetingCarousel from "components/carousels/MainGreetingCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import Spinner from "components/common/Spinner";

const MainRacketCarousel = dynamic(
  () => import("components/carousels/MainRacketCarousel"),
  {
    loading: () => <Spinner />,
    ssr: false,
  },
);

const Home: NextPage = () => {
  return (
    <div className="flex flex-col gap-y-5 border-red-900 max-w-[1200px] h-screen mx-auto p-4 ">
      <MainGreetingCarousel />
      <MainRacketCarousel />
    </div>
  );
};

export default Home;
