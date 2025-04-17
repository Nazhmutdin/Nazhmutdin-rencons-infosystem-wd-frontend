<template>
    <Paginator @update:first="(value) => emits('onPageChange', value)" :rows="rows" :total-records="totalRecords" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" />
</template>

<script setup lang="ts">
    import { Paginator } from 'primevue';

    const emits = defineEmits<{
        onPageChange: [number]
    }>()

    defineProps<{
        rows: number
        totalRecords: number
    }>()
</script>

<style scoped>
    .wrap {
        display: flex;
    }
</style>