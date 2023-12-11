import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreLists = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data } = useGenre();

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack marginY={2}>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="35px"
              borderRadius={8}
            />
            <Button
              fontSize="large"
              color={selectedGenre?.id === genre.id ? "#F4D03F" : ""}
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              variant="link"
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreLists;
