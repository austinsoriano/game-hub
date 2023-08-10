import { Box, Heading } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);
  const firstTrailer = data?.results[0];
  return firstTrailer ? (
    <Box marginBottom={5}>
      <Heading fontSize="lg" color="white">
        Trailer
      </Heading>
      <video
        src={firstTrailer.data[480]}
        poster={firstTrailer.preview}
        controls
      ></video>
    </Box>
  ) : null;
};

export default GameTrailer;
