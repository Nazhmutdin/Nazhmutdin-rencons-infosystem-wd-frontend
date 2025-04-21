<template>
    <div class="menu-bar-wrap">
        <NaksMenuBar></NaksMenuBar>
        <div class="page-content">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
    import NaksMenuBar from './NaksMenuBar.vue';
</script>

<style scoped>
    .p-menubar {
        width: 50vw;
        margin-bottom: 1vh;
    }
</style>
