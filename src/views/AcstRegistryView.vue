<template>
    <base-side-bar-view>
        <base-paginator 
            @on-page-change="(value) => onPageChangeHandler(value)" 
            :rows="acstRegistryStore.selectFilters.limit" 
            :total-records="acstRegistryStore.count">
        </base-paginator>
        <acst-table :values="acstRegistryStore.acstList"></acst-table>
    </base-side-bar-view>
</template>

<script setup lang="ts">
    import { onBeforeMount } from 'vue';

    import SideBar from '@/components/SideBar.vue';
    import BaseSideBarView from './BaseSideBarView.vue';

    import AcstTable from '@/components/tables/AcstTable.vue';

    import SearchBar from '@/components/SearchBar.vue';
    import BasePaginator from '@/components/BasePaginator.vue';

    import { useAcstRegistrySetup } from '@/composables/acst_registry_setup';

    const { acstRegistryStore, onPageChangeHandler } = useAcstRegistrySetup()

    onBeforeMount(
        async () => {
            await acstRegistryStore.selectAcsts()
        }
    )
</script>

<style scoped>
    .wrap {
        display: flex;
    }
</style>