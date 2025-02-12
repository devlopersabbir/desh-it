import type { SlideItem } from "@/constants";
import { Button } from "../ui/button";

type Props = {
  item: SlideItem;
};
const SlideItem = ({ item }: Props) => {
  return (
    <div className="flex gap-8">
      {/* image */}
      <div className="relative w-full">
        <img src={item.image} alt="banner" className="w-full" />
        <div className="w-28 h-28 flex-center flex-col rounded-full bg-orange absolute bottom-24 right-5">
          <h2 className="text-3xl font-bold">{item.off}%</h2>
          <p>OFF</p>
        </div>
      </div>
      {/* details */}
      <div className="flex flex-col justify-center items-end gap-5">
        <div className="flex flex-col items-end justify-center gap-3">
          <h1 className="text-5xl">{item.title}</h1>
          <span className="bg-orange w-1/4 h-1" />
        </div>
        <p>{item.description}</p>
        <Button className="hover:bg-orange bg-transparent border-2 border-orange px-5 py-1 uppercase font-semibold rounded-full">
          Make Reservation
        </Button>
      </div>
    </div>
  );
};
export default SlideItem;
