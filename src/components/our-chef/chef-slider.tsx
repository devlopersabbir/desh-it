import { Swiper, SwiperSlide } from "swiper/react";
import { chef } from "@/constants";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/navigation";
import "./chef-style.css";
// import required modules
import { Pagination } from "swiper/modules";
import ChefItem from "./chef-item";

const ChefSlider = () => {
  return (
    <Swiper
      breakpoints={{
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="chef-slider"
    >
      {chef.map((item, i) => (
        <SwiperSlide className="" key={i}>
          <ChefItem item={item} key={item.name} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default ChefSlider;
