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
        960: {
          slidesPerView: 4,
          spaceBetween: 8,
        },
        720: {
          slidesPerView: 3,
          spaceBetween: 6,
        },
        540: {
          slidesPerView: 2,
          spaceBetween: 4,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 2,
        },
      }}
      loop={true}
      pagination={{
        clickable: true,
        bulletClass: "chef-bullet-position",
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
