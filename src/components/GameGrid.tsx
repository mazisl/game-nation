import apiClient from "@/services/api-client";
import { useEffect, useState } from "react"

interface Game {
  id: number;
  name: string;
}

interface GamesFetchResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {

  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient.get<GamesFetchResponse>('/xgames')
      .then(res => setGames(res.data.results))
      .catch(err => setError(err.message))
  })

  return (
    <>
      {error && <p>{error}</p>}      
      <ul>
        {games.map(game => {
          return (
            <li key={game.id}>{game.name}</li>
          )
        })}
      </ul>
    </>
  )
}

export default GameGrid