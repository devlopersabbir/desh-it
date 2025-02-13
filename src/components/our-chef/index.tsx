import Wrapper from "../provider/wrapper";
import ChefSlider from "./chef-slider";

const OurChef = () => {
  return (
    <Wrapper classname="w-full margin-tb">
      <div className="flex-center w-full flex-col gap-10">
        <h1 className="text-dark_green text-3xl uppercase  font-bold">
          Our chef
        </h1>
        <ChefSlider />
      </div>
    </Wrapper>
  );
};
export default OurChef;
