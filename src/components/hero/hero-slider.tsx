import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/navigation";
import "./style.css";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import SlideItem from "./slide-item";
import Wrapper from "../provider/wrapper";
import { slideItem } from "@/constants";

const HeroSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {slideItem.map((item, i) => (
        <SwiperSlide key={i}>
          <Wrapper classname="w-full px-16 h-[80vh] flex-center">
            <SlideItem item={item} />
          </Wrapper>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default HeroSlider;
