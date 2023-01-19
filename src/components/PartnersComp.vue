<script >
export default {
    name: 'PartnersComp',
    data() {
        return {
            partners: ['amazon', 'google', 'lenovo', 'paypal', 'shopify', 'spotify']

        }
    },
    methods: {
        getImagePath: function (img) {
            return new URL(`../assets/img/${img}.svg`, import.meta.url).href;
        }
    },
}

</script>

<template>
    <section id="partners">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="partners-wrapper d-flex">
                        <div :id="partner" v-for="(partner, i) in partners" :key="i">
                            <img :src="getImagePath(partner)" :alt="partner + ' logo'" width="80">
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;
@use "bootstrap/scss/bootstrap.scss" as *;

.partners-wrapper {
    gap: 3rem;
    justify-content: center;
}
</style>
