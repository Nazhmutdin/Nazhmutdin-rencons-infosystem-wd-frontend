<template>
    <InputText @value-change="(value) =>emits('onInput', value)" :placeholder='placeholder' />
</template>

<script setup lang="ts">
    import { InputText } from 'primevue';

    const emits = defineEmits<{
        onInput: [string | undefined]
    }>()

    withDefaults(
        defineProps<{
            placeholder?: string
        }>(), {
            placeholder: "Search"
        }
    )
</script>

<style scoped></style>