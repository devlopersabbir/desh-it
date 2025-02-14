import { ZoomIn } from "lucide-react";
import { useState } from "react";
import PreviewDialog from "../shared";

const GalleryItem = ({ image }: { image: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Update the state directly when opening/closing
  const handleClick = () => setIsOpen((prev) => !prev);

  return (
    <div
      className="w-full relative cursor-pointer group overflow-hidden transition-all duration-300"
      onClick={handleClick}
    >
      <div className="absolute group-hover:text-white w-full h-full group-hover:bg-[#00800080] flex-center transition-all duration-300 opacity-0 group-hover:opacity-100 z-20">
        <ZoomIn
          size={25}
          className="group-hover:text-white group-hover:scale-150 scale-0 transition-all duration-300"
        />
      </div>
      <img
        src={image}
        alt="Gallery image"
        className="gallery-image w-full h-full group-hover:scale-125 transition-all duration-300 z-10"
      />

      {/* Pass the handleClick directly to close the dialog */}
      <PreviewDialog image={image} isOpen={isOpen} onClose={setIsOpen} />
    </div>
  );
};
export default GalleryItem;
