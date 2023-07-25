import { Game } from "./GameGrid";
import PlatformIconList from "./PlatformIconList";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import bullsEye from "../assets/bulls-eye.webp";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div
      id="gameCardContainer"
      className="flex flex-col overflow-hidden bg-gray-800"
    >
      <div id="gameImgContainer">
        <img src={getCroppedImageUrl(game.background_image)}></img>
      </div>
      <div id="gameContentContainer" className="p-[10px]">
        <div
          className="flex flex-row items-center justify-between"
          id="gameDetails"
        >
          <div id="gamePlatforms" className="text-white text-xs">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIconList>
          </div>
          <CriticScore score={game.metacritic}></CriticScore>
        </div>
        <p className="text-white text-left">{game.name}</p>
        <img src={bullsEye} className="h-[25px] w-[25px]"></img>
      </div>
    </div>
  );
};

export default GameCard;
