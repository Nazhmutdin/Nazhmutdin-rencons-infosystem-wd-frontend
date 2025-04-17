<template>
    <data-table striped-rows row-hover :value="values">
        <Column>
            <template #body>
                <i class="pi pi-external-link"></i>
            </template>
        </Column>
        <Column field="acstNumber" header="Number" />
        <Column field="method" header="Method" />
        <Column field="materials" header="Materials">
            <template #body="{ data, field }">
                {{ showListValue(data[field]) }}
            </template>
        </Column>
        <Column field="gtd" header="GTDs">
            <template #body="{ data, field }">
                {{ showGtdsValue(data[field]) }}
            </template>
        </Column>
        <Column field="thikness" header="Thikness">
            <template #body="{ data, field }">
                {{ presentFromBefore(data[field]) }}
            </template>
        </Column>
        <Column field="diameter" header="Diameter">
            <template #body="{ data, field }">
                {{ presentFromBefore(data[field]) }}
            </template>
        </Column>
        <Column field="certificationDate" header="Certification Date" />
        <Column field="expirationDate" header="Expiration Date" />
    </data-table>
</template>

<script setup lang="ts">
    import { DataTable, Column } from 'primevue';

    import type { AcstData } from '@/interfaces';

    import { presentFromBefore, showGtdsValue, showListValue } from '@/utils';

    defineProps<{
        values: AcstData[]
    }>()
</script>