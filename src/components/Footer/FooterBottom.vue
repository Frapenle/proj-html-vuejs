<template lang="">
    <div id="footer-bottom">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <p>&#169; 2020 Landrick. Design with <span>&hearts;</span> by Shreethemes.</p>
                </div>
                <div class="col-6">
                    <div class="payments-wrapper d-flex justify-content-end gap-1">
                        <div :id="payment" v-for="(payMethod, i) in payments" :key="i">
                            <img :src="getImagePath(payMethod)" :alt="payMethod + ' logo'" width="35">
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'FooterBottom',
    data() {
        return {
            payments: ['american-ex', 'discover', 'master-card', 'paypal', 'visa'],

        }
    },
    methods: {
        getImagePath: function (img) {
            return new URL(`../../assets/img/${img}.png`, import.meta.url).href;
        }
    },

}
</script>
<style lang="scss" scoped>
@use '../../styles/general.scss' as *;
@use '../../styles/partials/variables' as *;
@use "bootstrap/scss/bootstrap.scss" as *;

#footer-bottom {
    padding: 1rem 0;
}

span {
    color: red;
    font-size: 1rem;
}
</style>