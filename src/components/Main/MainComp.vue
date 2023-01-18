<script >
import KeyFeature from './KeyFeature.vue';
import QuickStart from './QuickStart.vue';
import BuildTools from './BuildTools.vue';
import PricingPlans from './PricingPlans.vue'

export default {
    name: 'MainComp',
    components: {
        KeyFeature,
        QuickStart,
        BuildTools,
        PricingPlans,

    },
    data() {
        return {

        }
    },
}

//import
</script>

<template>
    <KeyFeature />
    <QuickStart />
    <BuildTools />
    <PricingPlans />

</template>

<style lang="scss" scoped>
@use '../src/styles/general.scss' as *;
@use '../src/styles/partials/variables' as *;
@use "bootstrap/scss/bootstrap.scss" as *;
</style>
