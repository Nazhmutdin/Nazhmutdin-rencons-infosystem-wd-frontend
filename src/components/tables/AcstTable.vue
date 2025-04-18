<template>
    <data-table striped-rows row-hover :value="values">
        <Column field="ident">
            <template #body="{ data, field }">
                <router-link :to="{ name: 'acst', params: { id: data[field as keyof typeof data] } }" class="acst-page-link">
                    <input-icon class="pi pi-external-link"></input-icon>
                </router-link>
            </template>
        </Column>
        <Column field="acstNumber" header="Number" />
        <Column field="method" header="Method" />
        <Column field="materials" header="Materials">
            <template #body="{ data, field }">
                {{ showListValue(data[field as keyof typeof data]) }}
            </template>
        </Column>
        <Column field="gtd" header="GTDs">
            <template #body="{ data, field }">
                {{ showGtdsValue(data[field as keyof typeof data]) }}
            </template>
        </Column>
        <Column field="thikness" header="Thikness">
            <template #body="{ data, field }">
                {{ presentFromBefore(data[field as keyof typeof data]) }}
            </template>
        </Column>
        <Column field="diameter" header="Diameter">
            <template #body="{ data, field }">
                {{ presentFromBefore(data[field as keyof typeof data]) }}
            </template>
        </Column>
        <Column field="certificationDate" header="Certification Date" />
        <Column field="expirationDate" header="Expiration Date" />
    </data-table>
</template>

<script setup lang="ts">
    import { RouterLink } from 'vue-router';

    import { DataTable, Column } from 'primevue';

    import type { AcstData } from '@/interfaces';

    import { presentFromBefore, showGtdsValue, showListValue } from '@/utils';

    defineProps<{
        values: AcstData[]
    }>()
</script>

<style scoped>
    .acst-page-link {
        color: var(--p-datatable-row-color);
        text-decoration: none;
    }
</style>
