import { dishMenu, dishMenuItem } from "@/constants";
import Wrapper from "../provider/wrapper";
import { Button } from "../ui/button";
import CardItem from "./card-item";

const OurMenu = () => {
  return (
    <Wrapper classname="w-full margin-tb">
      <div className="flex w-full flex-col gap-10">
        <div className="flex flex-center pb-28 flex-col gap-5">
          <h1 className="text-dark_green text-3xl uppercase  font-bold">
            Our Menu
          </h1>
          <div className="flex flex-center space-x-5">
            {dishMenuItem.map((item, i) => (
              <Button
                className="hover:bg-light_green bg-transparent border-2 border-orange hover:border-light_green px-6 py-0.5 capitalize font-light rounded-full text-orange hover:text-white transition-all duration-300"
                key={i}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5 space-y-28">
          {dishMenu.map((item, index) => (
            <CardItem key={index} item={item} />
          ))}
        </div>
        {/* navigation on number */}
        <div className="flex-center space-x-2">
          {dishMenu.map((_, i) => (
            <div
              className="flex-center w-8 h-8 rounded-full hover:bg-dark_green hover:border-dark_green hover:text-white border-orange border-[1px] text-orange cursor-pointer font-semibold"
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
