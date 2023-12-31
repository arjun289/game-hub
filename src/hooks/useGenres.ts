import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import genres from "../data/genres";

export interface Genres {
    id: number;
    image_background: string;
    name: string;
}


const useGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.get<FetchResponse<Genres>>('/genres').then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h,
    initialData: {results: genres, count: genres.length}
})

export default useGenres;
