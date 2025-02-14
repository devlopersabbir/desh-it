import { Clock1Icon, LocateIcon, PhoneIcon } from "lucide-react";

export const topbardata = [
  {
    Icon: <LocateIcon size={15} />,
    text: "Your country, your city, 12345",
  },
  {
    Icon: <PhoneIcon size={15} />,
    text: "123 456 789",
  },
  {
    Icon: <Clock1Icon size={15} />,
    text: "11:00 - 21:00",
  },
];

export type TopbarData = (typeof topbardata)[number];
