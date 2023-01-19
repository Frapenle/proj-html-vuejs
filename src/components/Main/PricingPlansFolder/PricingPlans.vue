<script >
import PriceCard from './PriceCard.vue';

export default {
    name: 'PricingPlans',
    components: {
        PriceCard,
    },
    data() {
        return {

        }
    },
}
</script>

<template>
    <section id="pricing-plans">
        <div class="container">
            <div class="row text-center">
                <div class="col-12">
                    <h2>Our rates for developerrom Landrickeam</h2>
                    <p>Start working with <span>Landrick</span> that can provide everything you need to generate<br>
                        awareness, drive traffic,connect.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-4" v-for="item in 3">
                    <PriceCard />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../../styles/general.scss' as *;
@use '../../../styles/partials/variables' as *;
@use "bootstrap/scss/bootstrap.scss" as *;
</style>
