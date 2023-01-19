<script>
import HeaderComp from './components/HeaderComp.vue';
import HeroComp from './components/HeroComp.vue';
import PartnersComp from './components/PartnersComp.vue';
import MainComp from './components/Main/MainComp.vue';
import FooterComp from './components/Footer/FooterComp.vue';

export default {
  components: {
    HeaderComp,
    HeroComp,
    PartnersComp,
    MainComp,
    FooterComp,
  },
}
</script>

<template>
  <HeaderComp />
  <HeroComp />
  <PartnersComp />
  <MainComp />
  <FooterComp />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
@use "bootstrap/scss/bootstrap.scss" as *;

.intro-text {
  color: $blu;
}
</style>
