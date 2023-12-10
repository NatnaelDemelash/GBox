import { HStack, Icon, Image, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";
import { android, playstation, xbox, nintendo, apple } from "../assets";

interface Props {
  platforms: Platform[];
}

const PlatformIconsList = () => {
  return (
    <HStack marginY={2}>
      <Image src={android} />
      <Image src={playstation} />
      <Image src={apple} />
      <Image src={xbox} />
      <Image src={nintendo} />
    </HStack>
  );
};

export default PlatformIconsList;
