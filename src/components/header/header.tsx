import { menuItem } from "@/constants";
import Topbar from "./topbar";
import React, { useRef, useState, useEffect } from "react";
import { AlignRight } from "lucide-react";
import MobileMenu from "./mobile-menu";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const headerRef = useRef<HTMLHeadElement>(null);
  const openClickHandler = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    // intial header
    gsap.set(headerRef.current, {
      position: "relative",
      top: 0,
      width: "100%",
    });

    // Create the scroll trigger animation
    ScrollTrigger.create({
      start: "top -120",
      end: 99999,
      toggleClass: {
        className: "fixed-header",
        targets: headerRef.current,
      },
      onEnter: () => {
        gsap.to(headerRef.current, {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(12, 128, 39, 0.8)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          duration: 1,
          ease: "power2.out",
          zIndex: 10,
        });
      },
      onLeaveBack: () => {
        gsap.to(headerRef.current, {
          position: "relative",
          backgroundColor: "transparent",
          backdropFilter: "none",
          boxShadow: "none",
          duration: 1,
          ease: "power2.out",
        });
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <header ref={headerRef}>
      <div className="container-6 mx-auto">
        <Topbar />
        {/* main header */}
        <div className="flex-between w-full py-4">
          <a href="/">
            <img src="/logo.png" alt="Logo" />
          </a>
          <AlignRight
            size={30}
            onClick={openClickHandler}
            className="lg:hidden block text-white cursor-pointer"
          />
          <ul className="lg:flex-center space-x-4 hidden">
            {menuItem.map((item, i) => (
              <React.Fragment key={i}>
                <li className="text-base font-semibold text-white uppercase hover:text-orange hover:border-b-2 hover:border-orange border-b-2 border-transparent transition-all duration-300 cursor-pointer">
                  {item}
                </li>
                {i < menuItem.length - 1 && (
                  <span className="border-2 rounded-full w-1.5 h-1.5 bg-white" />
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
        <MobileMenu isOpen={isOpen} onClose={openClickHandler} />
      </div>
    </header>
  );
};

export default Header;
