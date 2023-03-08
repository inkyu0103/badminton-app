import Slider from "react-slick";
import EquipmentGuide from "components/carousels/contents/EquipmentGuide";

const MainGreetingCarousel = () => (
  <section>
    <p className="text-2xl font-bold">안녕하세요 :)</p>
    <Slider arrows={false} slidesToShow={1} className="flex gap-x-4">
      <EquipmentGuide />
      <EquipmentGuide />
      <EquipmentGuide />
    </Slider>
  </section>
);
export default MainGreetingCarousel;
