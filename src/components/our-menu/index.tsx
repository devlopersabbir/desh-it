import { dishMenu, dishMenuItem } from "@/constants";
import Wrapper from "../provider/wrapper";
import { Button } from "../ui/button";
import CardItem from "./card-item";
import { useEffect, useRef, useState } from "react";
import useScrollAnimations from "@/hooks";

const OurMenu = () => {
  const [active, setActive] = useState<number>(4);
  const headingRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  useScrollAnimations([headingRef, menuRef, paginationRef]);

  useEffect(() => {
    setActive(1);
  }, []);
  return (
    <Wrapper classname="w-full margin-tb">
      <div className="flex w-full flex-col gap-10">
        <div className="flex flex-center pb-28 flex-col gap-5" ref={headingRef}>
          <h1 className="text-dark_green lg:text-3xl text-2xl uppercase  font-bold">
            Our Menu
          </h1>
          <div className="flex flex-wrap flex-center lg:gap-5 gap-4">
            {dishMenuItem.map((item, i) => (
              <Button
                className="hover:bg-light_green bg-transparent border-2 border-orange hover:border-light_green lg:px-6 px-4 py-0.5 capitalize font-light rounded-full text-orange hover:text-white transition-all duration-300"
                key={i}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
        <div
          className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full gap-x-4 gap-y-36"
          ref={menuRef}
        >
          {dishMenu.map((item, index) => (
            <CardItem key={index} item={item} />
          ))}
        </div>
        {/* navigation on number */}
        <div className="flex-center space-x-2" ref={paginationRef}>
          {dishMenu.map((_, i) => (
            <div
              className={`flex-center w-8 h-8 rounded-full hover:bg-dark_green ${
                active === i + 1
                  ? "bg-dark_green border-dark_green text-white"
                  : ""
              } hover:border-dark_green hover:text-white border-orange border-[1px] text-orange cursor-pointer font-semibold`}
              key={i}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
export default OurMenu;
