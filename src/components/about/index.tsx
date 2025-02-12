import Wrapper from "../provider/wrapper";

const About = () => {
  return (
    <Wrapper classname="margin-tb">
      <div className="relative w-[90%] h-auto bg-orange flex p-10">
        <div className="flex-center w-1/2 p-10 flex-col gap-5 py-32">
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

        <div className="absolute -right-20">
          <div className="w-full relative">
            {/* Border overlay */}
            <div className="absolute inset-7 border-2 border-orange z-20" />
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
