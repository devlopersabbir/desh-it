import { useRef } from "react";
import type { SlideItem } from "@/constants";
import { Button } from "../ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type Props = {
  item: SlideItem;
  isActive: boolean;
};

const SlideItem = ({ item, isActive }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const elements = containerRef.current?.querySelectorAll(
      ".bottom-to-top-animation"
    );
    if (elements) {
      gsap.fromTo(
        elements,
        { y: 200, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }
  }, [isActive, item]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col lg:flex-row gap-4 lg:gap-8"
    >
      {/* image */}
      <div className="relative w-full lg:w-1/2 overflow-hidden bottom-to-top-animation">
        <img
          src={item.image || "/placeholder.svg"}
          alt="banner"
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-32 right-2 w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center flex-col bg-orange rounded-full">
          <h2 className="text-xl lg:text-3xl font-bold">{item.off}%</h2>
          <p className="text-sm lg:text-base">OFF</p>
        </div>
      </div>
      {/* details */}
      <div className="flex flex-col justify-center items-center lg:items-end gap-4 lg:gap-5 lg:w-1/2 lg:-mt-16">
        <div className="flex flex-col items-center lg:items-end justify-center gap-2 lg:gap-3 bottom-to-top-animation">
          <h1 className="text-3xl lg:text-5xl text-center lg:text-right">
            {item.title}
          </h1>
          <span className="bg-orange w-1/4 h-1" />
        </div>
        <p className="text-center lg:text-right bottom-to-top-animation">
          {item.description}
        </p>
        <Button className="hover:bg-orange bg-transparent border-2 border-orange px-4 py-2 lg:px-5 lg:py-2.5 text-sm lg:text-base uppercase font-semibold rounded-full transition-colors duration-300 bottom-to-top-animation">
          Make Reservation
        </Button>
      </div>
    </div>
  );
};

export default SlideItem;
