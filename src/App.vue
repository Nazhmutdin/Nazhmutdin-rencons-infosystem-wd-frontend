<template>
  <router-view/>
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router'

  import { useAppStore } from './store/app';
  import { onBeforeMount } from 'vue';

  const appStore = useAppStore()

  onBeforeMount(
    async () => {
      await appStore.getProjects()
      await appStore.getNaksWeldingGTDs()
      await appStore.getNaksWeldingMethods()
      await appStore.getWeldingMaterials()
      await appStore.getJointTypes()
      await appStore.getDetailTypes()
    }
  )
</script>

<style>
  body {
    margin: 0;
    
    --sidebar-width: 3vw;
    --sidebar-content-font-size: 18px;
    --sidebar-content-accordion-header-font-size: 18px;
  }
</style>
