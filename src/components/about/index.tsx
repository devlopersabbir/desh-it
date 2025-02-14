import { useRef } from "react";
import Wrapper from "../provider/wrapper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useScrollAnimations from "@/hooks";

gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useScrollAnimations([sectionRef, textRef, imageRef]);
  return (
    <Wrapper classname="margin-tb">
      <div
        className="lg:w-[90%] w-full h-auto bg-orange lg:p-10 p-5 lg:flex-1 lg:block flex flex-col lg:justify-center lg:items-center lg:gap-10 gap-5 overflow-visible relative"
        ref={sectionRef}
      >
        <div
          className="lg:w-1/2 w-full flex-center flex-col gap-5 lg:py-32 lg:text-left text-center"
          ref={textRef}
        >
          <h1 className="uppercase text-4xl font-semibold">About Us</h1>
          <p className="font-light text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>

        <div className="lg:absolute -right-28 top-10 bottom-10" ref={imageRef}>
          <div className="w-full relative shadow-2xl">
            {/* Border overlay */}
            <div className="hidden lg:block absolute inset-7 border-2 border-orange z-20" />
            <img
              className="w-full h-full z-10 shadow-2xl"
              src="/about-us.jpg"
              alt="about"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
