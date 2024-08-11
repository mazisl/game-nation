import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="grid grid-rows-auto grid-cols-1 lg:grid-cols-[auto,auto] lg:grid-rows-[auto,auto]">
      <div className="row-span-1 col-span-1 lg:col-span-2">
        <NavBar />
      </div>
      <div className="hidden lg:block lg:row-span-1 lg:col-span-1 px-4 w-[200px]">
        <GenreList />
      </div>
      <div className="row-span-1 col-span-1">
        <GameGrid />
      </div>
    </div>
  )
}

export default App
