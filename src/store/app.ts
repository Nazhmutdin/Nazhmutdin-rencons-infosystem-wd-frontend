import { defineStore } from 'pinia'
import { createApiClient } from '@/services/api/clients'
import type { GTDs } from '@/interfaces'


const axiosClient = createApiClient(process.env.DOMAIN as string)


export const useAppStore = defineStore('app', {
    state: () => ({
        projects: [] as string[],
        methods: [] as string[],
        GTDs: {} as { [key: string]: GTDs },
        weldingMaterials: [] as string[],
        jointTypes: [] as string[],
        detailTypes: [] as string[],
        infoToastMessage: "",
        successToastMessage: "",
        failToastMessage: ""
    }),
    actions: {
        async getProjects() {
            this.projects = (await axiosClient.get(
                "/static/projects.json"
            )).data
        },
        async getNaksWeldingGTDs() {
            this.GTDs = (await axiosClient.get(
                "/static/naks-welding-gtd.json"
            )).data
        },
        async getNaksWeldingMethods() {
            this.methods = (await axiosClient.get(
                "/static/naks-welding-methods.json"
            )).data
        },
        async getWeldingMaterials() {
            this.weldingMaterials = [
                "М01",
                "М03",
                "М11",
                "М03+М01"
            ]
        },
        async getJointTypes() {
            this.jointTypes = [
                "СШ",
                "УШ"
            ]
        },
        async getDetailTypes() {
            this.detailTypes = [
                "Л",
                "Т",
                "Л+Т",
                "С",
                "С+Л"
            ]
        }
    }
})
