<template>
    <IconField>
        <InputIcon class="pi pi-search" />
        <InputText @value-change="(value) =>emits('onInput', value)" :placeholder='placeholder' />
    </IconField>
</template>

<script setup lang="ts">
    import { IconField, InputIcon, InputText } from 'primevue';

    const emits = defineEmits<{
        onInput: [string | undefined]
    }>()

    withDefaults(
        defineProps<{
            placeholder: string
        }>(), {
            placeholder: "Search"
        }
    )
</script>

<style scoped></style>