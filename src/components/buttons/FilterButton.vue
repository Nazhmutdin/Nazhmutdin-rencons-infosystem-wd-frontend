<template>
    <Button icon="pi pi-filter" @click="(event) => emits('click', event)"></Button>
</template>

<script setup lang="ts">
    import { Button } from 'primevue';

    const emits = defineEmits<{
        click: [MouseEvent]
    }>()
</script>

<style scoped></style>
