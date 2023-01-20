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
            <div class="row align-items-center">
                <div class="col-6">
                    <div class="left">
                        <h1>A complete<br>developer toolset</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae sequi nesciunt omnis impedit
                            nemo.
                            Ut, eveniet asperiores dicta architecto minima et. Officiis quasi magnam nemo pariatur.
                            Minus
                            incidunt rem enim.</p>
                        <div class="buttons d-flex gap-2">
                            <button class="btn btn-blu">Get started</button>
                            <button class="btn btn-outline-blu">Documentation</button>
                        </div>
                        <p>Current Version: v2.6.0</p>
                    </div>

                </div>
                <div class="col-6">
                    <div class="right">
                        <div class="about-img d-flex justify-content-center">
                            <img src="../assets/img/about.png" alt="about image" class="img-fluid">
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

#hero {
    background-color: $bg-header;
    padding-top: 120px;
    padding-bottom: 90px;
}

h1 {
    text-transform: capitalize;
    font-weight: 700;
}
</style>
