import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: 'c8d7c3a0866b42e0bc105d7136a9f377'
    }
})
