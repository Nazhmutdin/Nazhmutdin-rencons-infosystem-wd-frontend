import type { AxiosError, AxiosResponse } from "axios"
import { defineStore } from "pinia"

import { createApiService } from "@/services/api"
import router from "@/router"


const authApiService = createApiService("auth")


export const useAuthStore = defineStore('auth', {
    actions: {
        async logIn(login: string, password: string) {
            const res = await authApiService.login(login, password).then(
                (response) => {
                    if (response.status == 200) {
                        router.push({ name: "main" })
                    }
                    return response
                },
                (err: AxiosError) => {
                    return err.response
                }
            )

            return res
        }
    }
})
