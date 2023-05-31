import EquipmentGuide from "components/carousels/contents/EquipmentGuide";
import Slider from "react-slick";

const MainGreetingCarousel = () => (
  <section>
    <p className="text-2xl font-bold">안녕하세요 ::)</p>
    <Slider arrows={false} slidesToShow={1} className="flex gap-x-4">
      <EquipmentGuide />
      <EquipmentGuide />
      <EquipmentGuide />
    </Slider>
  </section>
);
export default MainGreetingCarousel;
