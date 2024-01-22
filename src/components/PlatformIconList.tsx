import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { Platform } from "../hooks/usePlatforms";

const iconMap: { [key: string]: IconType } = {
  playstation: FaPlaystation,
  pc: FaWindows,
  xbox: FaXbox,
  nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  ios: MdPhoneIphone,
  web: BsGlobe,
  android: FaAndroid,
};

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <HStack marginY={"10px"}>
      {platforms.map((platform) => (
        <Icon
          key={platform.slug}
          as={iconMap[platform.slug]}
          color="gray.500"
        ></Icon>
      ))}
      ;
    </HStack>
  );
};

export default PlatformIconList;
