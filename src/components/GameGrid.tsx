// import apiClient from "@/services/api-client";
// import { useEffect, useState } from "react"

import useGames from "@/hooks/useGames"
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

// interface Game {
//   id: number;
//   name: string;
// }

// interface GamesFetchResponse {
//   count: number;
//   results: Game[];
// }

const GameGrid = () => {

  // const [games, setGames] = useState<Game[]>([]);
  // const [error, setError] = useState('');

  // useEffect(() => {
  //   apiClient.get<GamesFetchResponse>('/xgames')
  //     .then(res => setGames(res.data.results))
  //     .catch(err => setError(err.message))
  // })

  const {games, error, isLoading} = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <p>{error}</p>}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {isLoading && skeletons.map((skeleton => <GameCardSkeleton key={skeleton} />))}
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </>
  )
}

export default GameGrid