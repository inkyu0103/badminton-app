import Racket from "components/rackets/Racket";
import { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";

const MainRacketCarousel = ({ rackets }: any) => {
  const [clientWidth, setClientWidth] = useState(
    document.documentElement.clientWidth,
  );

  const handleResize = () =>
    setClientWidth(document.documentElement.clientWidth);

  const isMobile = () => clientWidth < 768;

  useEffect(() => {
    addEventListener("resize", handleResize);

    return removeEventListener("resize", () => {});
  }, []);

  const sliderOptions: Settings = {
    arrows: false,
    slidesToShow: 3,
    vertical: isMobile(),
    verticalSwiping: isMobile(),
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section>
      <p className="text-2xl font-bold">브랜드 별 라켓을 찾아보세요</p>
      <p className="text-xl font-bold">YONEX</p>
      <Slider {...sliderOptions}>
        <Racket name="나노레이 700" />
        <Racket name="나노레이 700" />
        <Racket name="나노레이 700" />
        <Racket name="나노레이 700" />
      </Slider>
    </section>
  );
};
export default MainRacketCarousel;
