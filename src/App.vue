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

p {
  color: $grey-text;
  font-size: 1rem;
}

.btn {
  font-weight: 500 !important;
}

.btn-blu {
  background-color: $blu !important;
  color: $text-col-white !important;
}

.btn-outline-blu {
  border: 1px solid $blu !important;
  color: $blu !important;

  &:hover {
    color: white !important;
    background-color: $blu !important;
  }
}

.intro-text {
  color: $blu;
}
</style>
