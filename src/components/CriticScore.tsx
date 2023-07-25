interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "bg-green-700" : score > 60 ? "bg-yellow-700" : "";

  return (
    <div id="score" className={`text-white text-xs  p-[3px] ${color}`}>
      {score}
    </div>
  );
};

export default CriticScore;
