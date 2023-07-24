import { useState } from "react";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  const items = ["Test1", "Test2", "Test3", "Test4"];

  return (
    <div className="bg-black grid grid-cols-6">
      <div className="col-span-full">
        <NavBar></NavBar>
      </div>
      <div className="hidden lg:block lg:col-span-1 bg-amber-500">
        <h1 className="">Sidebar</h1>
      </div>
      <div className="col-span-6 lg:col-span-5 bg-yellow-500">
        <h1 className="">Main</h1>
      </div>
    </div>
  );
}

export default App;
