import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  return (
    <Box>
      <Heading fontSize="lg" color="white">
        ScreenShots
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        {data?.results.map((file) => (
          <Image key={file.id} src={file.image}></Image>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GameScreenshots;
