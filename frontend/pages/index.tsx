import type { NextPage } from "next";
import MainRacketCarousel from "components/carousels/MainRacketCarousel";
import CheckMounted from "components/common/CheckMounted";
import MainGreetingCarousel from "components/carousels/MainGreetingCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "query/axios";

const Home: NextPage = () => {
  const e = async () => {
    const { data } = await axios.get("/auth/validate-token");
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-y-5 border-red-900 max-w-[1200px] h-screen mx-auto p-4 ">
      <MainGreetingCarousel />
      <CheckMounted>
        <MainRacketCarousel />
      </CheckMounted>
      <button onClick={async () => await e()}>테스트~</button>
    </div>
  );
};

export default Home;
