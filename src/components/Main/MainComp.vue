<script >
import KeyFeatures from './KeyFeature/KeyFeatures.vue';
import QuickStart from './QuickStart.vue';
import BuildTools from './BuildTools.vue';
import PricingPlans from './PricingPlans.vue'

export default {
    name: 'MainComp',
    components: {
        KeyFeatures,
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
    <KeyFeatures />
    <QuickStart />
    <BuildTools />
    <PricingPlans />

</template>

<style lang="scss" scoped>
@use '../../styles/general.scss' as *;
@use '../../styles/partials/variables' as *;
@use "bootstrap/scss/bootstrap.scss" as *;
</style>
