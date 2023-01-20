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
                        <div class="sticker">
                            <a href="#">Development</a>
                        </div>
                        <h1>A complete<br>developer toolset</h1>
                        <p class="py-3">Launch your campaign and benefit from our expertise on designing and managing
                            conversion
                            centered bootstrap4 html page.</p>
                        <div class="buttons d-flex gap-2">
                            <button class="btn btn-blu">Get started</button>
                            <button class="btn btn-outline-blu">Documentation</button>
                        </div>
                        <p class="py-2">Current Version: v2.6.0</p>
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
    line-height: 4rem;
}

.sticker>a {
    color: $blu;
    background-color: $bg-sticker-soft;
    display: inline-block;
    padding: .2rem .6rem;
    border-radius: 1rem;
    font-weight: 700;
    border: .5px solid #ADB5BD;

}
</style>
