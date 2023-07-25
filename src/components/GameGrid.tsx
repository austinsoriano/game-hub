import GameCard from "./GameCard";
import { GameQuery } from "../App";
import useGames, { Game } from "../hooks/useGames";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, isLoading, error } = useGames(gameQuery);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-[25px]">
      {data.map((game: Game) => {
        return (
          <div key={game.id} className="rounded-[10px] overflow-hidden">
            <GameCard game={game}></GameCard>
          </div>
        );
      })}
    </div>
  );
};

export default GameGrid;
