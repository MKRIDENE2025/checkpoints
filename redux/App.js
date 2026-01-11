import NavBar from "./components/NavBar";
import FilmList from "./components/FilmList";
import { useState } from "react";
import AddFilm from "./components/AddFilm";
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <NavBar setSearchTerm={setSearchTerm} />
      <AddFilm />
      <FilmList searchTerm={searchTerm} />
    </div>
  );
}

export default App;