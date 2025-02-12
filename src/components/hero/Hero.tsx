import Header from "../header/header";
import Wrapper from "../provider/wrapper";
import HeroSlider from "./hero-slider";

const Hero = () => {
  return (
    <div className="bg-[url(/slider_bg.jpg)] bg-no-repeat bg-cover h-screen">
      <Header />
      <Wrapper classname="w-full">
        <HeroSlider />
      </Wrapper>
    </div>
  );
};

export default Hero;
