import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genres {
    id: number;
    name: string;
}


interface ListGenres {
    count: number;
    results: Genres[];
}

const useGenres = () => {
    const controller = new AbortController();

    const [genres, setGenres] = useState<Genres[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true);
      apiClient
        .get<ListGenres>("/genres", {signal: controller.signal})
        .then((res) => {
          setGenres(res.data.results)
          setLoading(false)
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false)
        });

        return () => controller.abort();
    }, []);


    return {genres, error, isLoading}
}

export default useGenres;
