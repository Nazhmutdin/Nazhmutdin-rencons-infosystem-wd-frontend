<template>
    <Dialog v-model:visible="visible" modal header="Acst Filters">
        <filter-block>
            <template #header>
                <h3>methods</h3>
            </template>
            <FloatLabel variant="on">
                <SelectMethods v-model:selected-methods="methods" />
                <label for="methods">methods</label>
            </FloatLabel>
        </filter-block>

        <filter-block>
            <template #header>
                <h3>certification date</h3>
            </template>
            <FloatLabel variant="on">
                <DatePicker id="certificationDateFrom" showIcon iconDisplay="input" fluid date-format="dd.mm.yy" v-model="certificationDateFrom"/>
                <label for="certificationDateFrom">from</label>
            </FloatLabel>
            <FloatLabel variant="on">
                <DatePicker id="certificationDateTo" showIcon iconDisplay="input" fluid date-format="dd.mm.yy" v-model="certificationDateTo"/>
                <label for="certificationDateTo">to</label>
            </FloatLabel>
        </filter-block>

        <filter-block>
            <template #header>
                <h3>expiration date</h3>
            </template>
            <FloatLabel variant="on">
                <DatePicker id="expirationDateFrom" showIcon iconDisplay="input" fluid date-format="dd.mm.yy" v-model="expirationDateFrom"/>
                <label for="expirationDateFrom">from</label>
            </FloatLabel>
            <FloatLabel variant="on">
                <DatePicker id="expirationDateTo" showIcon iconDisplay="input" fluid date-format="dd.mm.yy" v-model="expirationDateTo"/>
                <label for="expirationDateTo">to</label>
            </FloatLabel>
        </filter-block>

        <filter-block>
            <template #header>
                <h3>thikness</h3>
            </template>
            <FloatLabel variant="on">
                <InputNumber id="thiknessFrom" :min="0" fluid v-model="thiknessFrom"/>
                <label for="thiknessFrom">from</label>
            </FloatLabel>
            <FloatLabel variant="on">
                <InputNumber id="thiknessTo" :min="0" fluid v-model="thiknessTo"/>
                <label for="thiknessTo">to</label>
            </FloatLabel>
        </filter-block>

        <filter-block>
            <template #header>
                <h3>diameter</h3>
            </template>
            <FloatLabel variant="on">
                <InputNumber id="diameterFrom" :min="0" fluid v-model="diameterFrom"/>
                <label for="diameterFrom">from</label>
            </FloatLabel>
            <FloatLabel variant="on">
                <InputNumber id="diameterTo" :min="0" fluid v-model="diameterTo"/>
                <label for="diameterTo">to</label>
            </FloatLabel>
        </filter-block>
    </Dialog>
</template>

<script setup lang="ts">
    import { ref, watch } from 'vue';
    import { useAcstRegistryStore } from '@/store/acstRegistry';

    import { Dialog } from 'primevue';

    import { FloatLabel, InputNumber, DatePicker } from 'primevue';

    import FilterBlock from '../FilterBlock.vue';
    import SelectMethods from '../multiSelects/SelectMethods.vue';

    import { convertFromDate } from '@/utils';

    const methods = ref(undefined as string[] | undefined)
    const certificationDateFrom = ref(undefined as Date | undefined)
    const certificationDateTo = ref(undefined as Date | undefined)
    const expirationDateFrom = ref(undefined as Date | undefined)
    const expirationDateTo = ref(undefined as Date | undefined)
    const diameterFrom = ref(undefined as number | undefined)
    const diameterTo = ref(undefined as number | undefined)
    const thiknessFrom = ref(undefined as number | undefined)
    const thiknessTo = ref(undefined as number | undefined)

    const acstRegistryStore = useAcstRegistryStore()

    watch (methods, () => {
        methods ? acstRegistryStore.selectFilters.methods = methods.value : acstRegistryStore.selectFilters.methods = undefined
    })
    watch (certificationDateFrom, (value) => {
        value ? acstRegistryStore.selectFilters.certificationDateFrom = convertFromDate(value) : acstRegistryStore.selectFilters.certificationDateFrom = undefined
    })
    watch (certificationDateTo, (value) => {
        value ? acstRegistryStore.selectFilters.certificationDateTo = convertFromDate(value) : acstRegistryStore.selectFilters.certificationDateTo = undefined
    })
    watch (expirationDateFrom, (value) => {
        value ? acstRegistryStore.selectFilters.expirationDateFrom = convertFromDate(value) : acstRegistryStore.selectFilters.expirationDateFrom = undefined
    })
    watch (expirationDateTo, (value) => {
        value ? acstRegistryStore.selectFilters.expirationDateTo = convertFromDate(value) : acstRegistryStore.selectFilters.expirationDateTo = undefined
    })
    watch (thiknessFrom, (value) => {
        value ? acstRegistryStore.selectFilters.thiknessFrom = value : acstRegistryStore.selectFilters.thiknessFrom = undefined
    })
    watch (thiknessTo, (value) => {
        value ? acstRegistryStore.selectFilters.thiknessTo = value : acstRegistryStore.selectFilters.thiknessTo = undefined
    })
    watch (diameterFrom, (value) => {
        value ? acstRegistryStore.selectFilters.diameterFrom = value : acstRegistryStore.selectFilters.diameterFrom = undefined
    })
    watch (diameterTo, (value) => {
        value ? acstRegistryStore.selectFilters.diameterTo = value : acstRegistryStore.selectFilters.diameterTo = undefined
        console.log(acstRegistryStore.selectFilters)
    })

    const visible = defineModel('visible', {
        type: Boolean,
        required: true
    })
</script>

<style scoped></style>
