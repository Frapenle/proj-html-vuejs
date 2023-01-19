<script >
import FeaturesCard from "./FeaturesCard.vue";
export default {
    name: 'KeyFeatures',
    components: {
        FeaturesCard,
    },

    data() {
        return {

        }
    },
}

//import
</script>

<template>
    <section id="key-features">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Key Features</h2>
                    <p>Start working with <span>Landrick</span> that can provide everything you need to generate<br>
                        awareness, drive traffic,connect.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <div class="cards">
                        <!-- insert 4 Features card -->
                        <FeaturesCard />

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../../styles/partials/variables' as *;
@use '../../../styles/general.scss' as *;
@use "bootstrap/scss/bootstrap.scss" as *;
</style>
