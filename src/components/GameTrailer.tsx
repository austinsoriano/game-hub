import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);
  const firstTrailer = data?.results[0];
  return firstTrailer ? (
    <video
      src={firstTrailer.data[480]}
      poster={firstTrailer.preview}
      controls
    ></video>
  ) : null;
};

export default GameTrailer;
