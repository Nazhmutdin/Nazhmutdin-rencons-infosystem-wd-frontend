<template>
    <div class="filter-block">
        <div class="header">
            <slot name="header"></slot>
        </div>
        <div class="body">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
    .header {
        color: var(--p-text-color);
        text-align: center;
    }
    .body {
        display: flex;
        flex-direction: column;
        gap: 1vh;
    }
</style>
