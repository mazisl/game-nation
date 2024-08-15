import { GameQuery } from "@/App";
// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/api-client";
import { FetchResponse } from "@/services/api-client";
// import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[];
  metacritic: number;
  rating_top: number;
}

// const useGames = (gameQuery: GameQuery) => useData<Game>('/games', 
//   {params: {
//     genres: gameQuery.genre?.id, 
//     platforms: gameQuery.platform?.id,
//     ordering: gameQuery.sortOrder,
//     search: gameQuery.searchText
//   }}, [gameQuery]);

//rewriting using react query
const useGames = (gameQuery: GameQuery) => 
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () => apiClient.get<FetchResponse<Game>>('/games', {
      params: {
        genres: gameQuery.genre?.id, 
        Parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
      }
    })
    .then(res => res.data)
  })

export default useGames;