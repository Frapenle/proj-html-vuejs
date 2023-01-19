<script >
export default {
    name: 'HeroComp',
    data() {
        return {

        }
    },
    methods: {

    },
}

</script>

<template>
    <section id="hero">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <h1>A complete<br>developer toolset</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae sequi nesciunt omnis impedit nemo.
                        Ut, eveniet asperiores dicta architecto minima et. Officiis quasi magnam nemo pariatur. Minus
                        incidunt rem enim.</p>
                    <button class="btn btn-primary">Get started</button>
                    <button class="btn btn-outline-primary">Documentation</button>

                </div>
                <div class="col-6">
                    <div class="about-img">
                        <img src="../assets/img/about.png" alt="about image">
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

h1 {
    text-transform: capitalize;
}
</style>
