import React, { useRef, useState } from "react";
import { CrossIcon, SearchIcon } from "lucide-react";
import { TopbarData, topbardata } from "@/constants/topbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn, Helper } from "@/lib/utils";

const Topbar = () => {
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const handleSearch = () => {
    setSearchOpen((prev) => !prev);
  };
  const searchBoxRef = useRef<HTMLDivElement>(null);

  // use gsap
  useGSAP(() => {
    if (searchBoxRef.current) {
      gsap.to(searchBoxRef.current, {
        width: searchOpen ? "90%" : "0%",
        visibility: "visible",
        duration: 0.1,
        ease: "elastic",
      });
    }
  }, [searchOpen]);
  return (
    <div className="md:flex hidden py-3 justify-between items-center border-b-[2px] border-[#fff3] relative">
      <div
        className={`flex space-x-4 transition-all duration-500 ${
          searchOpen && "opacity-0"
        }`}
      >
        {topbardata.map((item, i) => (
          <React.Fragment key={i}>
            <Item data={item} textStyle="text-white" iconStyle="text-orange" />
            {i < topbardata.length - 1 && (
              <span className="w-[1px] h-5 bg-orange" />
            )}
          </React.Fragment>
        ))}
      </div>
      {searchOpen ? (
        <CrossIcon
          onClick={handleSearch}
          size={20}
          className="text-orange font-semibold cursor-pointer z-20"
        />
      ) : (
        <SearchIcon
          onClick={handleSearch}
          size={20}
          className="text-orange font-semibold cursor-pointer z-20"
        />
      )}
      <div
        ref={searchBoxRef}
        className="absolute left-0 top-0 bottom-0 overflow-hidden py-1"
        style={{
          height: "45px",
          width: "0%",
          visibility: "hidden",
          transition: "width 0.5s ease",
        }}
      >
        <input
          type="text"
          placeholder="Search anything..."
          className="w-full h-full border-none outline-none text-white placeholder:text-white px-2 bg-transparent"
        />
      </div>
    </div>
  );
};
export default Topbar;

export type TopbarDataItem = {
  iconStyle: Helper<"text-orange" | "text-white">;
  textStyle: Helper<"text-orange" | "text-white">;
  data: TopbarData;
};
export const Item = ({ data, iconStyle, textStyle }: TopbarDataItem) => {
  return (
    <div className={`flex items-center space-x-2 ${cn(iconStyle)}`}>
      {data.Icon}
      <p className={`text-[13px] uppercase font-semibold ${cn(textStyle)}`}>
        {data.text}
      </p>
    </div>
  );
};
