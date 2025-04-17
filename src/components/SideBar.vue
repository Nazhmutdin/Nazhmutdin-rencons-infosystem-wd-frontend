<template>
    <div class="sidebar">
        <div class="sidebar-panel">
            <Button icon="pi pi-bars" @click="visible = true" />
        </div>
        <drawer v-model:visible="visible">
            <template #header>
                <span class="">Some Logo</span>
            </template>
            <div class="container">
                <Accordion :value="['0']" multiple>
                    <AccordionPanel value="0">
                        <AccordionHeader>NAKS</AccordionHeader>
                        <AccordionContent>
                            <ul>
                                <li class="sidebar-link">
                                    <router-link :to="{ name: 'acstRegistry' }">
                                        <span>acst</span>
                                    </router-link>
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionPanel>
                </Accordion>
            </div>
        </drawer>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    import { RouterLink } from 'vue-router';

    import Drawer from 'primevue/drawer';
    import Button from 'primevue/button';

    import { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from 'primevue';

    const visible = ref(false)
</script>

<style scoped>
    .sidebar {
        padding: 1vh 0;
        height: 100vh;
        border-right: 1px solid #c4cad2;
    }
    .sidebar-panel {
        width: 3vw;
        display: flex;
        justify-content: center;
    }
    .p-accordionheader {
        font-size: var(--sidebar-content-accordion-header-font-size);
    }
    ul {
        cursor: pointer;
        list-style: none;
    }
    ul li a {
        text-decoration: none;
        color: var(--p-accordion-content-color);
        font-size: var(--sidebar-content-font-size);
    }
</style>
