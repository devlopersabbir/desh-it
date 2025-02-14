import { DishMenu } from "@/constants";
import { ZoomIn } from "lucide-react";
import PreviewDialog from "../dialog";
import { useRef, useState } from "react";
import useScrollAnimations from "@/hooks";

type Props = {
  item: DishMenu;
};

const CardItem = ({ item }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClose = () => setIsOpen((prev) => !prev);

  return (
    <div
      className="flex-between h-auto border-[1px] border-orange relative flex-col lg:gap-6 gap-3 lg:p-5 p-2 group cursor-pointer hover:bg-orange transition-all duration-300 w-full hover:shadow-lg"
      onClick={handleClose}
    >
      <div className="w-52 h-52 rounded-full shadow-2xl p-2 -mt-32 relative flex-center overflow-hidden">
        <div className="absolute rounded-full w-full h-full group-hover:bg-[#237723bd] border-2 flex-center transition-all duration-300">
          <ZoomIn
            size={25}
            className="group-hover:text-white group-hover:scale-150 scale-0 transition-all duration-300"
          />
        </div>
        <img
          src={item.image ?? "/beef-burger-lg.jpg"}
          alt={item.name}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <h2 className="text-orange font-bold uppercase text-2xl text-center group-hover:text-white transition-all duration-300">
        {item.name ?? "empty"}
      </h2>
      <div className="flex-center flex-col">
        <span className="uppercase text-zinc-500 group-hover:text-zinc-50 text-base transition-all duration-300">
          size:{item.size ?? "LARGE"}
        </span>
        <p className="text-base text-zinc-700 group-hover:text-zinc-100 text-center transition-all duration-300">
          {item.info ?? "empty"}
        </p>
      </div>
      <h3 className="text-dark_green text-2xl font-bold group-hover:text-white transition-all duration-300">
        ${item.price ?? 32}
      </h3>
      <PreviewDialog image={item.image} isOpen={isOpen} onClose={handleClose} />
    </div>
  );
};
export default CardItem;
