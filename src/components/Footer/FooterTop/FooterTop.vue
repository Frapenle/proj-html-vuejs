
<script>
import FooterLinks from "./FooterLinks.vue";

export default {
    name: 'FooterTop',
    components: {
        FooterLinks,

    },
    data() {
        return {
            footerInfo: 'Start working width Landrick that can provide everything you need to generate awareness, drive traffic, connect.',
            inputEmail: '',

        }
    },

}
</script>
<template lang="">
    <section id="footer-top" class="pt-5">

        <div class="container">
            <div class="row justify-content-between">
                <div class="col-4">
                    <div class="footer-logo">
                        <img src="../../../assets/img/logo-light.png" alt="Landrick logo" width="150">
                    </div>
                    <div class="info">
                        <p class="footer-info py-4 m-0">
                            {{footerInfo}}
                        </p>
                    </div>
                    <div class="social-icons d-flex gap-2">
                        <font-awesome-icon icon="fa-brands fa-facebook-f " class="ico-border facebook"/>
                        <font-awesome-icon icon="fa-brands fa-twitter" class="ico-border twitter"/>
                        <font-awesome-icon icon="fa-brands fa-instagram" class="ico-border instagram"/>
                        <font-awesome-icon icon="fa-brands fa-linkedin-in" class="ico-border linkedin"/>
                    </div>
                </div>
                <div class="col-5">
                    <FooterLinks />
                </div>
                <div class="col-3">
                    <div class="d-flex justify-content-center">
                        <div class="wrapper">

                            <h5>Newsletter</h5>
                            <p>Sign up and receive the latest tips via email.</p>
                            <div class="form">
                                <input :v-model="inputEmail" type="email" name="" id="email" placeholder=" Your email :">
                                <a href="#" class="btn">Subscribe</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <hr>
    </section>

</template>
<style lang="scss" scoped>
@use '../../../styles/general.scss' as *;
@use '../../../styles/partials/variables' as *;
@use "bootstrap/scss/bootstrap.scss" as *;

.ico-border {
    border: 1px solid $border-col-white;
    border-radius: .375rem;
}

.facebook {
    padding: 5px 7px;

}

.twitter,
.instagram,
.linkedin {
    padding: 5px 5px;

}

input#email {
    border-radius: .375rem !important;
    color: $grey-text;
    padding: .3rem;
    border: none;
    outline: none;
    background-color: #27314F;
}

hr {
    color: #b4c7ff78;
}
</style>