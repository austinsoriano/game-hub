import React from "react";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    playstation: FaPlaystation,
    pc: FaWindows,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <div className="flex flex-row">
      {platforms.map((platform) => {
        return React.createElement(iconMap[platform.slug], {
          key: platform.id,
          className: "mx-[3px]",
        });
      })}
    </div>
  );
};

export default PlatformIconList;