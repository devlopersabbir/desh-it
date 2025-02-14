import { ArrowUp } from "lucide-react";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

const BackToTop = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
  }, []);

  const clickHandler = () => {
    gsap.to(window, {
      scrollTo: 0,
      duration: 1,
    });
  };

  return (
    <ArrowUp
      onClick={clickHandler}
      size={30}
      className="text-white bg-green-600 w-12 h-12 rounded-full fixed bottom-10 right-10 cursor-pointer p-2"
    />
  );
};

export default BackToTop;
