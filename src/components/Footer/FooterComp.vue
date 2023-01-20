<script >
import FooterTop from "./FooterTop/FooterTop.vue";
import FooterBottom from "./FooterBottom.vue";

export default {
    name: 'FooterComp',
    components: {
        FooterTop,
        FooterBottom,
    },
    data() {
        return {

        }
    },
}
</script>

<template>
    <footer>
        <FooterTop />
        <FooterBottom />
    </footer>

</template>

<style lang="scss" scoped>
@use '../../styles/general.scss' as *;
@use '../../styles/partials/variables' as *;
@use "bootstrap/scss/bootstrap.scss" as *;

footer {
    background-color: $bg-footer;
    color: $text-col-white;
    font-size: .9rem;
}
</style>
