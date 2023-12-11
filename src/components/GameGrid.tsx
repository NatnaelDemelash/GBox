import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameLoadingSkeleton from "./GameLoadingSkeleton";
import { Genre } from "../hooks/useGenre";
import useGames from "../hooks/useGames";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; //for mapping purpose only

  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={"14px"}
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameLoadingSkeleton key={skeleton} />)}

        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
