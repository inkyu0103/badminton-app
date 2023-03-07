import type { NextPage } from "next";
import EquipmentGuide from "components/carousels/contents/EquipmentGuide";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Racket from "components/rackets/Racket";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  const isMobile = () => document.documentElement.clientWidth < 768;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const sliderOptions: Settings = {
    arrows: false,
    slidesToShow: 3,
    vertical: isMobile(),
    verticalSwiping: isMobile(),
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="flex flex-col gap-y-5 border-red-900 max-w-[1200px] h-screen mx-auto p-4 ">
      <div>
        <p className="text-2xl font-bold">안녕하세요 :)</p>
        <Slider arrows={false} slidesToShow={1} className="flex gap-x-4">
          <EquipmentGuide />
          <EquipmentGuide />
          <EquipmentGuide />
          <EquipmentGuide />
        </Slider>
      </div>

      <div>
        <p className="text-2xl font-bold">브랜드 별 라켓을 찾아보세요</p>
        <p className="text-xl font-bold">YONEX</p>
        <Slider {...sliderOptions}>
          <Racket name="나노레이 700" />
          <Racket name="나노레이 700" />
          <Racket name="나노레이 700" />
          <Racket name="나노레이 700" />
        </Slider>
      </div>
    </div>
  );
};

export default Home;
