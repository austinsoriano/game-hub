import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  console.log("Current Game: " + JSON.stringify(game));
  return (
    <div
      id="gameCardContainer"
      className="flex flex-col overflow-hidden bg-gray-800"
    >
      <div id="gameImgContainer">
        <img src={getCroppedImageUrl(game.background_image)}></img>
      </div>
      <div id="gameContentContainer" className="p-[15px]">
        <div
          className="flex flex-row items-center justify-between py-[3px]"
          id="gameDetails"
        >
          <div id="gamePlatforms" className="text-white text-xs">
            <PlatformIconList
              platforms={game.parent_platforms.map((p: any) => p.platform)}
            ></PlatformIconList>
          </div>
          <CriticScore score={game.metacritic}></CriticScore>
        </div>
        <p className="text-white text-left py-[3px]">{game.name}</p>
        <Emoji rating={game.rating_top}></Emoji>
      </div>
    </div>
  );
};

export default GameCard;
