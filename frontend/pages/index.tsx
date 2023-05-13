import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MainGreetingCarousel from "components/carousels/MainGreetingCarousel";
import Spinner from "components/common/Spinner";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

const MainRacketCarousel = dynamic(
  () => import("components/carousels/MainRacketCarousel"),
  {
    loading: () => <Spinner />,
    ssr: false,
  },
);

const YoutubeVideoList = dynamic(
  () => import("components/videos/YoutubeVideoList"),
  {
    loading: () => <Spinner />,
    ssr: false,
  },
);

const Home: NextPage = () => {
  return (
    <div className="w-full flex-1 flex flex-col gap-y-5  max-w-[1200px]  mx-auto p-4 ">
      <MainGreetingCarousel />
      <MainRacketCarousel />
      <YoutubeVideoList />
    </div>
  );
};

export default Home;
