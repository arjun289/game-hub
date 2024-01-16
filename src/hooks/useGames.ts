import { useInfiniteQuery, useQuery } from "@tanstack/react-query"; 
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

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({pageParam =1 }) => apiClient.getAll({params: {...params, page: pageParam}}),
    getNextPageParam: (lastPage, allPages) => {
    
      return  lastPage.next ?  allPages.length + 1: undefined
    },
    staleTime:  24*60*60*1000
      
  })
}
  
  
export default useGames;
