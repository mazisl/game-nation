// import useData from "./useData";
import platforms from "@/data/platforms";
// import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
// import { FetchResponse } from "@/services/api-client";
import APIClient from "@/services/api-client";

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

//getting platform list from static data inside platforms.ts
// const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

//using react query
// const usePlatforms = () => useQuery({
//   queryKey: ['platforms'],
//   queryFn: () => apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then(res => res.data),
//   staleTime: 24 * 60 * 60 * 1000, //24 hours
//   initialData: {count: platforms.length, results: platforms}
// })

//using reusable api client
const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: apiClient.getAll,
  staleTime: 24 * 60 * 60 * 1000, //24 hours
  initialData: {count: platforms.length, results: platforms}
})

export default usePlatforms;