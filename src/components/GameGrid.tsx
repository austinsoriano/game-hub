import GameCard from "./GameCard";
import { Platform } from "../hooks/usePlatforms";

export interface Game {
  id: number;
  metacritic: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
}

interface Props {
  games: Game[];
}

const GameGrid = ({ games }: Props) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-[25px]">
      {games.map((game) => {
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
