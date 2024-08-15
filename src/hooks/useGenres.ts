// import useData from "./useData";
import genres from "@/data/genres";

import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/api-client";
import { FetchResponse } from "@/services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>('/genres');

//getting genre list from static data inside genres.ts
// const useGenres = () => ({data: genres, isLoading: false, error: null})

//using react query
const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres').then(res => res.data),
  staleTime: 24 * 60 * 60 * 1000, //24 hours
  initialData: {count: genres.length, results: genres}
})

export default useGenres;