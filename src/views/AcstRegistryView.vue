<template>
    <base-side-bar-view>
        <div class="registry-search">
            <div class="search-area">
                <search-bar class="search-input" @on-input="(value) => console.log(value)"></search-bar>
                <filter-button outlined></filter-button>
                <search-button outlined @click="acstRegistryStore.selectAcsts"></search-button>
            </div>
            <div class="pagination-area">
                <base-paginator 
                    @on-page-change="(value) => onPageChangeHandler(value)" 
                    :rows="acstRegistryStore.selectFilters.limit" 
                    :total-records="acstRegistryStore.count">
                </base-paginator>
            </div>
        </div>
        <div class="registry-content">
            <acst-table :values="acstRegistryStore.acstList"></acst-table>
        </div>
    </base-side-bar-view>
</template>

<script setup lang="ts">
    import { onBeforeMount } from 'vue';

    import BaseSideBarView from './BaseSideBarView.vue';

    import AcstTable from '@/components/tables/AcstTable.vue';

    import SearchBar from '@/components/SearchBar.vue';
    import BasePaginator from '@/components/BasePaginator.vue';
    import SearchButton from '@/components/buttons/SearchButton.vue';
    import FilterButton from '@/components/buttons/FilterButton.vue';

    import { useAcstRegistrySetup } from '@/composables/acst_registry_setup';

    const { 
        acstRegistryStore, 
        onPageChangeHandler,

    } = useAcstRegistrySetup()

    onBeforeMount(
        async () => {
            if (acstRegistryStore.count == 0) {
                await acstRegistryStore.selectAcsts()
            }
        }
    )
</script>

<style scoped>
    .registry-search {
        width: 50vw;
    }
    .search-area {
        display: flex;
        gap: .7vw;
    }
    .search-input {
        width: 45vw;
    }
    :deep(.p-paginator) {
        justify-content: left;
        padding: 2vh 0;
    }
</style>
