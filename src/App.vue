<template>
  <router-view/>
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router'
</script>

<style>
  body {
    margin: 0;
    
    --sidebar-content-font-size: 18px;
    --sidebar-content-accordion-header-font-size: 18px;
  }
</style>
