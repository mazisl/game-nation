import { GameQuery } from "@/App";
// import useData from "./useData";
// import { useQuery } from "@tanstack/react-query";
import { useInfiniteQuery } from "@tanstack/react-query";
// import apiClient from "@/services/api-client";
// import { FetchResponse } from "@/services/api-client";
import APIClient, {FetchResponse} from "@/services/api-client";
// import { Genre } from "./useGenres";

import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>('/games');

// export interface Platform {
//   id: number;
//   name: string;
//   slug: string;
// }

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
// const useGames = (gameQuery: GameQuery) => 
//   useQuery<FetchResponse<Game>, Error>({
//     queryKey: ['games', gameQuery],
//     queryFn: () => apiClient.get<FetchResponse<Game>>('/games', {
//       params: {
//         genres: gameQuery.genre?.id, 
//         Parent_platforms: gameQuery.platform?.id,
//         ordering: gameQuery.sortOrder,
//         search: gameQuery.searchText
//       }
//     })
//     .then(res => res.data)
//   })

//using the reusable api client
// const useGames = (gameQuery: GameQuery) => 
//   useQuery<FetchResponse<Game>, Error>({
//     queryKey: ['games', gameQuery],
//     queryFn: () => apiClient.getAll({
//       params: {
//         genres: gameQuery.genre?.id, 
//         Parent_platforms: gameQuery.platform?.id,
//         ordering: gameQuery.sortOrder,
//         search: gameQuery.searchText
//       }
//     })
//   })

//implementing infinite query
const useGames = (gameQuery: GameQuery) => 
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({pageParam = 1}) => apiClient.getAll({
      params: {
        genres: gameQuery.genre?.id, 
        Parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam
      }
    }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000 //24 hrs
  })


export default useGames;