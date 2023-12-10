import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

const GenreLists = () => {
  const { genres } = useGenre();

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack marginY={2}>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="35px"
              borderRadius={8}
            />
            <Text fontSize="large">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreLists;
