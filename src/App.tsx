import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import GenreList from "./components/GenreList";
import GameGrid from "./components/GameGrid";
import PlatformSelector from "./components/PlatformSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";
import "./App.css";

export interface GameQuery {
  genres: Genre | null;
  platforms: string;
  sortOrder: string;
  search: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState({} as GameQuery);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="bg-black grid grid-cols-10">
      <div className="col-span-full">
        <NavBar
          onSearch={(search) => setGameQuery({ ...gameQuery, search })}
        ></NavBar>
      </div>
      <div className="hidden lg:block lg:col-span-1">
        <h1 className="text-xl font-bold text-white px-[10px]">Genres</h1>
        <GenreList
          onSelectedGenre={(genres) => setGameQuery({ ...gameQuery, genres })}
        ></GenreList>
      </div>
      <div className="col-span-10 lg:col-span-9">
        <h1 className="text-white text-3xl font-bold ml-[25px] py-[10px]">
          Games
        </h1>
        <div className="flex flex-row items-center">
          <PlatformSelector
            onSelectedPlatform={(platforms) =>
              setGameQuery({ ...gameQuery, platforms })
            }
          ></PlatformSelector>
        </div>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </div>
    </div>
  );
}

export default App;
