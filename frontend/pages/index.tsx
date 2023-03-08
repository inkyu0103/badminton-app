import type { NextPage } from "next";
import MainRacketCarousel from "components/carousels/MainRacketCarousel";
import CheckMounted from "components/common/CheckMounted";
import MainGreetingCarousel from "components/carousels/MainGreetingCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col gap-y-5 border-red-900 max-w-[1200px] h-screen mx-auto p-4 ">
      <MainGreetingCarousel />
      <CheckMounted>
        <MainRacketCarousel />
      </CheckMounted>
    </div>
  );
};

export default Home;
