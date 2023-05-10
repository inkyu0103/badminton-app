import Racket from "components/rackets/Racket";
import { IRacket } from "interface/Racket.interface";
import { useRacketListQuery } from "query/rackets/rackets";
import { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";
import { debounce } from "utils/debounce";

export interface MainRacketCarouselProps {
  clientWidth: number;
  rackets: {
    count: number;
    rackets: IRacket[];
  };
}

const MainRacketCarousel = () => {
  const { data } = useRacketListQuery();

  const [clientWidth, setClientWidth] = useState(
    document.documentElement.clientWidth,
  );

  const handleResize = () =>
    setClientWidth(document.documentElement.clientWidth);

  useEffect(() => {
    addEventListener("resize", debounce(handleResize));

    return removeEventListener("resize", () => {});
  }, []);

  return <MainRacketCarouselView clientWidth={clientWidth} rackets={data} />;
};
export default MainRacketCarousel;

const MainRacketCarouselView = ({
  clientWidth,
  rackets,
}: MainRacketCarouselProps) => {
  const sliderOptions: Settings = {
    arrows: false,
    slidesToShow: 3,
    vertical: clientWidth < 768,
    verticalSwiping: clientWidth < 768,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section>
      <p className="text-2xl font-bold">브랜드 별 라켓을 찾아보세요</p>
      <p className="text-xl font-bold">YONEX</p>
      <Slider {...sliderOptions}>
        {rackets.rackets.map((racket) => (
          <Racket key={racket.id} name={racket.name} racketId={racket.id} />
        ))}
      </Slider>
    </section>
  );
};
