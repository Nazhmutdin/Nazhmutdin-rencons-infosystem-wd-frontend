import { createAuthApiClient } from "./clients"
import { ApiService } from "./base"


export class AuthApiService extends ApiService {
    constructor() {
        super(
            createAuthApiClient(process.env.API_DOMAIN as string)
        )
    }

    public getCurrentUser() {
        return this.apiClient.post('auth/v1/me')
    }

    public getCurrentUserPermissions() {
        return this.apiClient.post('auth/v1/me/permissions')
    }

    public login(login: string, password: string) {
        return this.apiClient.post('auth/v1/login', { login, password })
    }

    public authenticate() {
        return this.apiClient.post('auth/v1/authenticate')
    }

    public updateTokens() {
        return this.apiClient.post('auth/v1/update-tokens')
    }

    public logout() {
        return this.apiClient.post('auth/v1/logout')
    }
}
