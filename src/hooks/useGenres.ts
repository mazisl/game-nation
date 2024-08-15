// import useData from "./useData";
// import genres from "@/data/genres";

import { useQuery } from "@tanstack/react-query";
// import apiClient from "@/services/api-client";
import APIClient from "@/services/api-client";
import genres from "@/data/genres";
// import { FetchResponse } from "@/services/api-client";

import ms from 'ms';

const apiClient = new APIClient<Genre>('/genres');

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>('/genres');

//getting genre list from static data inside genres.ts
// const useGenres = () => ({data: genres, isLoading: false, error: null})

//using react query
// const useGenres = () => useQuery({
//   queryKey: ['genres'],
//   queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres').then(res => res.data),
//   staleTime: 24 * 60 * 60 * 1000, //24 hours
//   initialData: {count: genres.length, results: genres}
// })

//using the reusable api client
const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
  staleTime: ms('24h'),
  initialData: genres
})

export default useGenres;