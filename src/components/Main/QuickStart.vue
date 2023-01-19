<script >
import PricingPlans from './PricingPlans.vue';

export default {
    name: "QuickStart",
    components: { PricingPlans },
    data() {
        return {};
    },
}

//import
</script>

<template>
    <section id="quick-start">
        <div class="container">
            <div class="row text-center">
                <div class="col-12">
                    <h2>Awesome isn't it? Let's dive in!</h2>
                    <p>Start working with <span>Landrick</span> that can provide everything you need to generate<br>
                        awareness, drive traffic,connect.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <PricingPlans />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/general.scss' as *;
@use '../../styles/partials/variables' as *;
@use "bootstrap/scss/bootstrap.scss" as *;
</style>
