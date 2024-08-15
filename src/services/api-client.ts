import axios, { AxiosRequestConfig } from "axios";
const apiKey = import.meta.env.VITE_API_KEY;

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

//replaced with reusable api client
// export default axios.create({
//   baseURL: 'https://api.rawg.io/api',
//   params: {
//     key: apiKey
//   }
// })


const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: apiKey
  }
})

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data)
  }
}

export default APIClient;