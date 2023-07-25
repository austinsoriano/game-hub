import { GameQuery } from "../App";
import { Platform } from "../hooks/usePlatforms";
import useData from "./useData";

export interface Game {
  id: number;
  metacritic: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  const url = new URL("https://api.rawg.io/api/games?");

  url.searchParams.set("key", "a6ca9a40fde345bea623a3edbeffcf2d");
  for (const key in gameQuery) {
    if (gameQuery[key as keyof GameQuery]) {
      let queryValue;
      if (key === "genres" || key === "platform") {
        queryValue = JSON.stringify(gameQuery[key]?.id);
      } else {
        queryValue = JSON.stringify(gameQuery[key as keyof GameQuery]);
      }
      console.log("queryValue: " + queryValue);
      url.searchParams.set(key, queryValue);
    }
  }
  url.searchParams.set("genre", "7");
  return useData<Game>(url.toString(), [gameQuery]);
};

export default useGames;
