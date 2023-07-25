import GameCard from "./GameCard";

export interface Game {
  id: number;
  metacritic: number;
  name: string;
  background_image: string;
}

interface Props {
  games: Game[];
}

const GameGrid = ({ games }: Props) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
