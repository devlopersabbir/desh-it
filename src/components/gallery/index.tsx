import { RefreshCwIcon } from "lucide-react";
import Wrapper from "../provider/wrapper";
import { Button } from "../ui/button";
import GalleryImage from "./gallery-image";

const Gallery = () => {
  return (
    <Wrapper classname="w-full margin-tb">
      <div className="flex-center w-full flex-col gap-10">
        <h1 className="text-dark_green text-3xl uppercase  font-bold">
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
