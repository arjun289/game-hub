import { useQuery } from "@tanstack/react-query"; 
import { GameQuery } from "../App";
import { FetchResponse } from "../services/api-client"; 
import { Platform } from "./usePlatform";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Game>('/games')

export interface Game {
    id: number;
    name: string;
    background_image: string
    parent_platforms: {platform: Platform}[],
    metacritic: number
    rating_top: number;
    rating: number;
  }
  

const useGames = (gameQuery: GameQuery) => {
  const params = {genres: gameQuery.genre?.id, 
    parent_platforms: gameQuery.platform?.id, 
    ordering: gameQuery.sortOrder,
    search: gameQuery.searchText
  }

  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () => apiClient.getAll({params: params}),
      
  })
}
  
  
export default useGames;
