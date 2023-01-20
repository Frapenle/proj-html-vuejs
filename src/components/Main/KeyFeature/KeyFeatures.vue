<script >
import FeaturesCard from "./FeaturesCard.vue";
export default {
    name: 'KeyFeatures',
    components: {
        FeaturesCard,
    },

    data() {
        return {
            featuresList: [
                {
                    icon: 'fa-solid fa-display',
                    title: 'Modular',
                    text: 'Composed in a pseudo-Latin language which more or less corresponds.',
                    readMore: 'All the basics for businessthat are just getting started.',
                },
                {
                    icon: 'fa-solid fa-display',
                    title: 'Responsive',
                    text: 'Composed in a pseudo-Latin language which more or less corresponds.',
                    readMore: 'All the basics for businessthat are just getting started.',
                },
                {
                    icon: 'fa-solid fa-display',
                    title: 'Customizable',
                    text: 'Composed in a pseudo-Latin language which more or less corresponds.',
                    readMore: 'All the basics for businessthat are just getting started.',
                },
                {
                    icon: 'fa-solid fa-display',
                    title: 'Scalable',
                    text: 'Composed in a pseudo-Latin language which more or less corresponds.',
                    readMore: 'All the basics for businessthat are just getting started.',
                },
            ],

        }
    },
}

</script>

<template>
    <section id="key-features">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Key Features</h2>
                    <p class="py-3 mb-5">Start working with <span>Landrick</span> that can provide everything you need
                        to
                        generate<br>
                        awareness, drive traffic,connect.</p>
                </div>
            </div>
            <div class="row justify-content-between">
                <FeaturesCard v-for="(feature, i) in featuresList" :key="i" :icon="feature.icon" :title="feature.title"
                    :text="feature.text" :readMore="feature.readMore" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../../styles/partials/variables' as *;
@use '../../../styles/general.scss' as *;
@use "bootstrap/scss/bootstrap.scss" as *;

#key-features {
    padding: 70px 0;
}
</style>
