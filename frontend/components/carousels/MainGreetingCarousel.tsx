import "swiper/css";
import "swiper/css/navigation";

import EquipmentGuide from "components/carousels/contents/EquipmentGuide";
import { Swiper, SwiperSlide } from "swiper/react";

const MainGreetingCarousel = () => (
  <section>
    <p className="text-2xl font-bold">안녕하세요 :)</p>
    <Swiper navigation={false}>
      <SwiperSlide>
        <EquipmentGuide />
      </SwiperSlide>
    </Swiper>
  </section>
);
export default MainGreetingCarousel;
