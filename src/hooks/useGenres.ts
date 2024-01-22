import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";

export interface Genres {
    id: number;
    image_background: string;
    name: string;
}

const apiClient = new APIClient<Genres>('/genres')

const useGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h,
    initialData: {results: genres, count: genres.length, next: null}
})

export default useGenres;
