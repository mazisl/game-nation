import { useState } from "react"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import NavBar from "./components/NavBar"
import { Genre } from "./hooks/useGenres"

function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <div className="grid grid-rows-auto grid-cols-1 lg:grid-cols-[auto,auto] lg:grid-rows-[auto,auto]">
      <div className="row-span-1 col-span-1 lg:col-span-2">
        <NavBar />
      </div>
      <div className="hidden lg:block lg:row-span-1 lg:col-span-1 px-4 w-[200px]">
        <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)}/>
      </div>
      <div className="row-span-1 col-span-1">
        <GameGrid selectedGenre={selectedGenre} />
      </div>
    </div>
  )
}

export default App;
