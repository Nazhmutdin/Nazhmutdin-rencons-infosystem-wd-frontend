import { defineStore } from 'pinia'
import type {
    AcstData,
    UpdateAcstData
} from '@/interfaces'
import { createApiService } from '@/services/api'
import router from '../router'


export const useAcstStore = defineStore('acst-registry', {
    state: () => ({
        acst: {} as AcstData
    }),
    actions: {
        async deleteAcst(ident: string) {
            const service = createApiService('acst')

            await service.delete(ident)

            router.push({ name: 'acstRegistry' })
        },

        async updateAcst(ident: string, data: UpdateAcstData) {
            const service = createApiService('acst')

            await service.update(ident, data)

            this.acst = (await service.get(ident)).data
        },

        async getAcst(ident: string) {
            const service = createApiService('acst')

            this.acst = (await service.get(ident)).data as AcstData
        }
    },
    
})
