import NavBar from "./components/NavBar";
import GenreList from "./components/GenreList";
import "./App.css";

export interface Game {}

function App() {
  return (
    <div className="bg-black grid grid-cols-10">
      <div className="col-span-full">
        <NavBar></NavBar>
      </div>
      <div className="hidden lg:block lg:col-span-1">
        <GenreList></GenreList>
      </div>
      <div className="col-span-10 lg:col-span-9 bg-yellow-500">
        <h1 className="text-white">Games</h1>
      </div>
    </div>
  );
}

export default App;
