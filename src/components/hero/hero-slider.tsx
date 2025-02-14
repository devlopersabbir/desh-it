import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import SlideItem from "./slide-item";
import Wrapper from "../provider/wrapper";
import { slideItem } from "@/constants";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/navigation";
import "./style.css";

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

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
      onSlideChange={handleSlideChange}
    >
      {slideItem.map((item, i) => (
        <SwiperSlide key={i}>
          <Wrapper classname="w-full px-16 h-[80vh] flex-center">
            <SlideItem item={item} isActive={i === activeIndex} />
          </Wrapper>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
