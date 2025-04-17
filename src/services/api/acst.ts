import { createApiClient } from "./clients"
import { ApiService } from "./base"


export class AcstApiService extends ApiService {
    constructor() {
        super(
            createApiClient(process.env.API_DOMAIN as string)
        )
    }

    public getAcstAnalogues(ident: string) {
        return this.apiClient.get(`/v1/acst/${ident}/analogues`)
    }

    public get(ident: string) {
        return this.apiClient.get(`/v1/acst/${ident}`)
    }

    public select(filters: Object) {
        return this.apiClient.get('/v1/acst/select', {
            params: filters
        })
    }

    public update(ident: string, data: object) {
        return this.apiClient.patch(`/v1/acst/${ident}`, data)
    }

    public delete(ident: string) {
        return this.apiClient.delete(`/v1/acst/${ident}`)
    }
}
