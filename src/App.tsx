import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import GenreList from "./components/GenreList";
import GameGrid from "./components/GameGrid";
import "./App.css";

function App() {
  const [games, setGames] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    fetch(
      "https://api.rawg.io/api/games?key=a6ca9a40fde345bea623a3edbeffcf2d",
      {
        method: "GET",
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        console.log(JSON.stringify(data.results));
        setGames(data.results);
      })
      .catch((error) => {
        console.log("Error caught with: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  return (
    <div className="bg-black grid grid-cols-10">
      <div className="col-span-full">
        <NavBar></NavBar>
      </div>
      <div className="hidden lg:block lg:col-span-1">
        <h1 className="text-xl font-bold text-white px-[10px]">Genres</h1>
        <GenreList></GenreList>
      </div>
      <div className="col-span-10 lg:col-span-9">
        <h1 className="text-white text-3xl font-bold py-[10px]">Games</h1>
        <GameGrid games={games}></GameGrid>
      </div>
    </div>
  );
}

export default App;
