import { type AxiosInstance } from "axios"


export class ApiService {
    protected apiClient: AxiosInstance

    constructor(apiClient: AxiosInstance) {
        this.apiClient = apiClient
    }
}