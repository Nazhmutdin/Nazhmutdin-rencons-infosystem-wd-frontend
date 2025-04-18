<template>
    <Button icon="pi pi-search" @click="(event) => emits('click', event)"></Button>
</template>

<script setup lang="ts">
    import { Button } from 'primevue';

    const emits = defineEmits<{
        click: [MouseEvent]
    }>()
</script>

<style scoped></style>
