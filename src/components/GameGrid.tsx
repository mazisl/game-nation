// import apiClient from "@/services/api-client";
// import { useEffect, useState } from "react"

import useGames, { Platform } from "@/hooks/useGames"
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "@/hooks/useGenres";

// interface Game {
//   id: number;
//   name: string;
// }

// interface GamesFetchResponse {
//   count: number;
//   results: Game[];
// }

interface GameGridProps {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({selectedGenre, selectedPlatform}: GameGridProps) => {

  // const [games, setGames] = useState<Game[]>([]);
  // const [error, setError] = useState('');

  // useEffect(() => {
  //   apiClient.get<GamesFetchResponse>('/xgames')
  //     .then(res => setGames(res.data.results))
  //     .catch(err => setError(err.message))
  // })

  // const {games, error, isLoading} = useGames();
  const {data, error, isLoading} = useGames(selectedGenre, selectedPlatform);

  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <p>{error}</p>}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {isLoading && skeletons.map((skeleton => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          )))}
          {/* {games.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))} */}
          {data.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
        </div>
      </div>
    </>
  )
}

export default GameGrid;