import { galleryImages } from "@/constants";
import { ZoomIn } from "lucide-react";

const GalleryImage = () => {
  return (
    <div className="grid grid-cols-3 gap-10 overflow-hidden w-full">
      {galleryImages.map((image) => (
        <div className="w-full relative cursor-pointer group overflow-hidden transition-all duration-300 ">
          <div className="absolute group-hover:text-white w-full h-full group-hover:bg-[#00800080] flex-center transition-all duration-300 opacity-0 group-hover:opacity-100 z-20">
            <ZoomIn
              size={25}
              className="group-hover:text-white transition-all duration-300"
            />
          </div>
          <img
            src={image}
            alt="image"
            className="w-full h-full group-hover:scale-125 transition-all duration-300 z-10"
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryImage;
