import { useAcstRegistryStore } from "@/store/acstRegistry"


export function useAcstRegistrySetup() {
    const acstRegistryStore = useAcstRegistryStore()

    const onPageChangeHandler = async (value: number) => {
        acstRegistryStore.selectFilters.offset = value

        await acstRegistryStore.selectAcsts()
    }

    return {
        acstRegistryStore,
        onPageChangeHandler
    }
}
