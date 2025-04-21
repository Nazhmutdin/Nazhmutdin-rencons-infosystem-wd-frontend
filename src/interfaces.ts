export interface AcstData {
    ident: string
    acstNumber: string
    certificationDate: string
    expirationDate: string
    company: string
    gtd: string[]
    method: string | null
    detailTypes: string[] | null
    jointTypes: string[] | null
    materials: string[] | null
    thikness: [number | null, number | null] | null
    diameter: [number | null, number | null] | null
    preheating: boolean[] | null
    heatTreatment: boolean[] | null
    html: string
}


export interface UpdateAcstData {
    acstNumber?: string
    certificationDate?: string
    expirationDate?: string
    company?: string
    gtd?: string[]
    method?: string | null
    detailTypes?: string[] | null
    jointTypes?: string[] | null
    materials?: string[] | null
    thikness?: [number | null, number | null] | null
    diameter?: [number | null, number | null] | null
    preheating?: boolean[] | null
    heatTreatment?: boolean[] | null
}


export interface BaseSelectFilters {
    limit: number,
    offset: number
}


export interface SelectResponseData<Data> {
    result: Data[],
    count: number
}


export interface SelectAcstFilters extends BaseSelectFilters {
    methods?: string[]
    certificationDateFrom?: string
    certificationDateTo?: string
    expirationDateFrom?: string
    expirationDateTo?: string
    thiknessFrom?: number
    thiknessTo?: number
    diameterFrom?: number
    diameterTo?: number
}


export interface GtdData {
    fullDescription: string,
    ntds: string[]
}


export interface GTDs { 
    [key: number]: GtdData 
}
