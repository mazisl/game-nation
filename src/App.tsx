import { useState } from "react"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import NavBar from "./components/NavBar"
import { Genre } from "./hooks/useGenres"
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./hooks/useGames"
import SortSelector from "./components/SortSelector"

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {

  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  // return (
  //   <>
  //     <div className="grid grid-rows-auto grid-cols-1 lg:grid-cols-[auto,auto] lg:grid-rows-[auto,auto]">
  //       <div className="row-span-1 col-span-1 lg:col-span-2">
  //         <NavBar />
  //       </div>
  //       <div className="hidden lg:block lg:row-span-1 lg:col-span-1 px-4 w-[200px]">
  //         <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} selectedGenreText={selectedGenre}/>
  //       </div>
  //       <div className="row-span-1 col-span-1">
  //         <PlatformSelector onSelectPlatform={(platform) => setSelectedPlatform(platform)} selectedPlatform={selectedPlatform} />
  //         <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
  //       </div>
  //     </div>
  //   </>
  // )

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <div className="grid grid-rows-auto grid-cols-1 lg:grid-cols-[auto,auto] lg:grid-rows-[auto,auto]">
        <div className="row-span-1 col-span-1 lg:col-span-2">
          <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})} />
        </div>
        <div className="hidden lg:block lg:row-span-1 lg:col-span-1 px-4 w-[200px]">
          <GenreList onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})} selectedGenreText={gameQuery.genre}/>
        </div>
        <div className="row-span-1 col-span-1">
          <div className="flex">
            <div className="mr-6">
              <PlatformSelector onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})} selectedPlatform={gameQuery.platform} />
            </div>
            <SortSelector onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})} />
          </div>
          <GameGrid gameQuery={gameQuery} />
        </div>
      </div>
    </>
  )  
}

export default App;
