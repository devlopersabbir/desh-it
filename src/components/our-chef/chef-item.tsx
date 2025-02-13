import { Chef, SocialProvider } from "@/constants";
import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

type Props = {
  item: Chef;
};
const ChefItem = ({ item }: Props) => {
  return (
    <div className="flex-center w-full max-h-fit hover:cursor-pointer group relative">
      <div className="image">
        <img className="" src={item.image ?? "/chef_1.jpg"} alt="chef" />
      </div>
      <div className="info group-hover:bg-gradient-to-t group-hover:from-dark_green group-hover:to-transparent absolute bottom-0 w-full h-full flex justify-end items-center flex-col gap-5 transition-all duration-300 opacity-0 group-hover:opacity-100">
        <h2 className="text-2xl text-white font-semibold">{item.name}</h2>
        <div className="flex-center space-x-4 pb-16">
          {item.socials.map((social, index) => (
            <SocialNetwork
              provider={social.provider}
              url={social.url}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ChefItem;

export const socialIcons = {
  facebook: <FacebookIcon className="text-orange" size={24} />,
  x: <TwitterIcon className="text-orange" size={24} />,
  linkedin: <LinkedinIcon className="text-orange" size={24} />,
  youtube: <YoutubeIcon className="text-orange" size={24} />,
};
type SocialProps = {
  url: string;
  provider: SocialProvider;
};
const SocialNetwork = ({ provider, url }: SocialProps) => {
  const Icon = socialIcons[provider];

  if (Icon) {
    return (
      <div
        onClick={() => window.open(url, "_blank")}
        className="cursor-pointer"
      >
        {Icon}
      </div>
    );
  }
};
