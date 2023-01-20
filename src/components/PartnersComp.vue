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
        <hr>
        <div class="container">
            <div class="row justify-content-center flex-wrap">
                <div class="col-6 col-md-12">
                    <div class="partners-wrapper d-flex flex-wrap justify-content-around">
                        <div :id="partner" v-for="(partner, i) in partners" :key="i">
                            <img :src="getImagePath(partner)" :alt="partner + ' logo'" width="80" class="img-fluid">
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

#partners {
    background-color: $bg-header;
}

.partners-wrapper {
    gap: 3rem;
    justify-content: center;
    padding: 2rem;
}

hr {
    margin: 0;
}
</style>
