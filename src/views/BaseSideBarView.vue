<template>
    <div class="wrap">
        <side-bar></side-bar>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
    import SideBar from '@/components/SideBar.vue';
</script>

<style scoped>
    .wrap {
        display: flex;
    }
    :deep(.sidebar) {
        position: fixed
    }
    .content {
        margin-left: calc(3vw + 1px);
    }
</style>