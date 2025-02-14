import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GalleryItem from "./gallery-item";
import { galleryImages } from "@/constants";

gsap.registerPlugin(ScrollTrigger);
const GalleryImage = () => {
  useEffect(() => {
    const images = document.querySelectorAll(".gallery-image");

    images.forEach((image) => {
      gsap.fromTo(
        image,
        {
          scale: 0,
        },
        {
          scale: 1,
          scrollTrigger: {
            trigger: image,
          },
        }
      );
    });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-10 overflow-hidden w-full">
      {galleryImages.map((image, index) => (
        <GalleryItem image={image} key={index} />
      ))}
    </div>
  );
};

export default GalleryImage;
