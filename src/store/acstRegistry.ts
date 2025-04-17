import { defineStore } from 'pinia'
import type {
    AcstData,
    SelectAcstFilters,
    SelectResponseData
} from '@/interfaces'
import { createApiService } from '@/services/api'


export const useAcstRegistryStore = defineStore('acst-registry', {
    state: () => ({
        currentPage: 1 as number,
        selectFilters: {
            limit: 50,
            offset: 0
        } as SelectAcstFilters,
        acstList: [] as AcstData[],
        count: 0 as number
    }),
    actions: {
        async selectAcsts() {
            const service = createApiService('acst')

            const result = (await service.select(this.selectFilters)).data as SelectResponseData<AcstData>

            this.acstList = result.result
            this.count = result.count
        }
    }
})
