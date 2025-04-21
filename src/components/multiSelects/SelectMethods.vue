<template>
    <MultiSelect v-model="selectedMethods" :options="appStore.methods" fluid />
</template>

<script setup lang="ts">
    import { MultiSelect } from 'primevue';
    import { useAppStore } from '@/store/app';

    const selectedMethods = defineModel('selectedMethods')

    const appStore = useAppStore()
</script>

<style scoped></style>
