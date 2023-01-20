
<script>
import FooterLinks from "./FooterLinks.vue";

export default {
    name: 'FooterTop',
    components: {
        FooterLinks,

    },
    data() {
        return {
            footerInfo: 'Start working width Landrick that can provide everything you need to generate awareness, drive traffic, connect.'

        }
    },

}
</script>
<template lang="">
    <section id="footer-top" class="py-5">

        <div class="container">
            <div class="row justify-content-between">
                <div class="col-3">
                    <div class="footer-logo">
                        <img src="../../../assets/img/logo-light.png" alt="Landrick logo" width="150">
                    </div>
                    <div class="info">
                        <p class="footer-info py-4 mx-0">
                            {{footerInfo}}
                        </p>
                    </div>
                    <div class="social-icons">
                        <font-awesome-icon icon="fa-brands fa-facebook-f --fa-inverse" class="icon-b"/>
                    </div>
                </div>
                <div class="col-6">
                    <FooterLinks />
                </div>
                <div class="col-3">
                    <h1>testo</h1>
                </div>
            </div>
        </div>
    </section>

</template>
<style lang="scss" scoped>
@use '../../../styles/general.scss' as *;
@use '../../../styles/partials/variables' as *;
@use "bootstrap/scss/bootstrap.scss" as *;

#footer-top {
    color: white;
}

.icon-b {
    border: 1px solid $border-col-white;
    border-radius: .375rem;
    padding: 5px 7px;

}
</style>