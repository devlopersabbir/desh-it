import { useRef } from "react";
import Wrapper from "../provider/wrapper";
import ChefSlider from "./chef-slider";
import useScrollAnimations from "@/hooks";

const OurChef = () => {
  const chefRef = useRef<HTMLDivElement>(null);
  useScrollAnimations([chefRef]);
  return (
    <Wrapper classname="w-full margin-tb">
      <div className="flex-center w-full flex-col gap-10" ref={chefRef}>
        <h1 className="text-dark_green lg:text-3xl text-2xl uppercase  font-bold">
          Our chef
        </h1>
        <ChefSlider />
      </div>
    </Wrapper>
  );
};
export default OurChef;
