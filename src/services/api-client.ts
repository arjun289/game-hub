import axios, { Axios, AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}



const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: 'c8d7c3a0866b42e0bc105d7136a9f377'
    }
})

class APIClient<T> {
    endpoint: string

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getAll = (config?: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then((res) => res.data)
    }

}

export default APIClient;
