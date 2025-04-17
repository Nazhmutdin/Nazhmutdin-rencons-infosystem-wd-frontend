import { AcstApiService } from "./acst"
import { AuthApiService } from "./auth"


type mode = "acst" | "auth"

export function createApiService(mode: 'acst'): AcstApiService

export function createApiService(mode: 'auth'): AuthApiService

export function createApiService(mode: mode) {
    switch (mode) {
        case 'acst': {
            return new AcstApiService()
        }
        case 'auth': {
            return new AuthApiService()
        }
    }
}