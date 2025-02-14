import { RefreshCwIcon } from "lucide-react";
import Wrapper from "../provider/wrapper";
import { Button } from "../ui/button";
import GalleryImage from "./gallery-image";
import { useRef } from "react";
import useScrollAnimations from "@/hooks";

const Gallery = () => {
  const headingRef = useRef(null);
  useScrollAnimations([headingRef]);
  return (
    <Wrapper classname="w-full margin-tb">
      <div className="flex-center w-full flex-col gap-10">
        <h1
          className="text-dark_green lg:text-3xl text-2xl uppercase  font-bold"
          ref={headingRef}
        >
          Gallery
        </h1>
        <GalleryImage />
        {/* more image buton */}
        <Button className="uppercase font-semibold text-2xl bg-orange hover:bg-transparent border-2 hover:border-orange flex-center rounded-none px-8 py-6 hover:text-orange border-orange group">
          <RefreshCwIcon size={35} className="" />
          more images
        </Button>
      </div>
    </Wrapper>
  );
};
export default Gallery;
