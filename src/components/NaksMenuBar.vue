<template>
    <Menubar :model="items">
        <template #item="{ item, props }">
            <router-link v-if="item.route" v-slot="{ href, navigate }" :to="{ name: item.route }" custom>
                <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                    <span>{{ item.label }}</span>
                </a>
            </router-link>
        </template>
    </Menubar>
</template>

<script setup lang="ts">
    import { Menubar } from 'primevue';
    import type { MenuItem } from 'primevue/menuitem';

    const items: MenuItem[] = [
        { 
            label: 'acst',
            route: 'acstRegistry'
        },
        { 
            label: 'acso',
            route: 'acsoRegistry'
        },
        { 
            label: 'naks builder',
            route: 'naksBuilder'
        }
    ]
</script>

<style scoped></style>
