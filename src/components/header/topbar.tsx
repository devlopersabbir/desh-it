import { ReactNode } from "react";
import { Clock1Icon, LocateIcon, PhoneIcon, SearchIcon } from "lucide-react";

const Topbar = () => {
  const handleSearch = () => {};
  return (
    <div className="flex justify-between items-center border-b-2">
      <div className="flex space-x-4 py-3">
        {/* address */}
        <Item
          icon={<LocateIcon className="text-orange" size={15} />}
          text="Your country, your city, 12345"
        />
        {/* number */}
        <Item
          icon={<PhoneIcon className="text-orange" size={15} />}
          text="123 456 789"
        />
        {/* time */}
        <Item
          icon={<Clock1Icon className="text-orange" size={15} />}
          text="11:00 - 21:00"
        />
      </div>
      <SearchIcon
        onClick={handleSearch}
        size={20}
        className="text-orange font-semibold"
      />
    </div>
  );
};
export default Topbar;

type ItemPros = {
  icon: ReactNode;
  text: string;
};
const Item = ({ icon, text }: ItemPros) => {
  return (
    <div className="flex items-center space-x-2">
      {icon}
      <p className="text-[13px] uppercase font-semibold">{text}</p>
    </div>
  );
};
