import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/gameLogo.png";
import ColorModeSwitcher from "./ColorModeSwitcher";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" paddingY={5} paddingX={10}>
      <HStack>
        <Image src={logo} boxSize="40px" />
        <Text fontFamily="monospace" fontSize="25px">
          GameHub
        </Text>
      </HStack>
      <ColorModeSwitcher />
    </HStack>
  );
};

export default NavBar;
