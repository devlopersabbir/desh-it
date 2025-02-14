import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimations = (
  elements: React.RefObject<HTMLElement | null>[],
  duration = 0.3
) => {
  useEffect(() => {
    const context = gsap.context(() => {
      elements.forEach((elementRef) => {
        if (elementRef.current) {
          gsap.fromTo(
            elementRef.current,
            {
              opacity: 0,
              y: 100,
            },
            {
              opacity: 1,
              y: 0,
              duration,
              scrollTrigger: {
                trigger: elementRef.current,
              },
            }
          );
        }
      });
    });

    return () => context.revert();
  }, [elements]);
};

export default useScrollAnimations;
