<script >
import PriceCard from './PriceCard.vue';

export default {
    name: 'PricingPlans',
    components: {
        PriceCard,
    },
    data() {
        return {
            pricePlans: [
                {
                    planName: 'Basic',
                    price: '$ 9.00',
                    planTime: 'Per month',
                    textInfo: 'All the basicsfor businessthat are just getting started.',
                    servicesList: ['full access', 'enhanced security', 'source files', '1 domain free', 'enhanced security'],
                    textCc: '*No credit card required',
                    btnText: 'Buy Now',
                },
                {
                    planName: 'Business',
                    price: '$ 39.00',
                    planTime: 'Per month',
                    textInfo: 'Better for growing business that want more customer.',
                    servicesList: ['full access', 'enhanced security', 'source files', '1 domain free', 'enhanced security'],
                    textCc: '*No credit card required',
                    btnText: 'Buy Now',
                },
                {
                    planName: 'Enterprise',
                    price: '$ 79.00',
                    planTime: 'Per month',
                    textInfo: 'Advanced features for props who need more customization.',
                    servicesList: ['full access', 'enhanced security', 'source files', '1 domain free', 'enhanced security'],
                    textCc: '*No credit card required',
                    btnText: 'Buy Now',
                },
            ],

        }
    },
}
</script>

<template>
    <section id="pricing-plans">
        <div class="container">
            <div class="row text-center">
                <div class="col-12">
                    <h2>Our rates for developer from Landrick team</h2>
                    <p class="py-3 mb-5">Start working with <span class="landrick">Landrick</span> that can provide
                        everything you need to
                        generate<br>
                        awareness, drive traffic,connect.</p>
                </div>
            </div>
            <div class="row">
                <PriceCard v-for="(plan, i) in pricePlans" :key="i" :planName="plan.planName" :price="plan.price"
                    :planTime="plan.planTime" :textInfo="plan.textInfo" :services="plan.servicesList"
                    :textCc="plan.textCc" :btnText="plan.btnText" />
            </div>
        </div>
    </section>
    <section id="contact-us">
        <div class="container">
            <div class="row text-center">
                <div class="col-12">
                    <h2>Want to be among the first to find out?</h2>
                    <p class="py-3">Start working with <span class="landrick">Landrick</span> that can provide
                        everything you need to
                        generate<br>
                        awareness, drive traffic,connect.</p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="d-flex justify-content-center">
                        <input type="email" name="" id="contact-us-email" placeholder="Email Address">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../../styles/general.scss' as *;
@use '../../../styles/partials/variables' as *;
@use "bootstrap/scss/bootstrap.scss" as *;

#pricing-plans {
    padding-bottom: 70px;
}

#contact-us {
    margin-bottom: 4rem;
}

input {
    width: 50%;
    padding: .9rem;
    border-radius: 2rem;
    outline: none;
    border: 1px solid $input;
    font-size: 1rem;
}
</style>
