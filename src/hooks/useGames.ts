import { useQuery } from "@tanstack/react-query"; 
import { GameQuery } from "../App";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client"; 

export interface Platform {
  id: number,
  name: string,
  slug: string
}

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
    queryFn: () => 
      apiClient.get<FetchResponse<Game>>('/games', {params: params})
      .then((res) => res.data)
  })
}
  
  
export default useGames;
