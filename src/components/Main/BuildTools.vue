<script >
export default {
    name: 'BuildTools',
    data() {
        return {

        }
    },
}

</script>

<template>
    <section id="build-tools">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-6">
                    <h1>Build tools and<br>extensive documentation</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae sequi nesciunt omnis impedit nemo.
                        Ut, eveniet.</p>
                    <ul>
                        <li class="d-flex gap-1">
                            <font-awesome-icon icon="fa-regular fa-circle-check" />
                            <p>Digital Marketing Solution for Tomorrow</p>
                        </li>
                        <li class="d-flex gap-1">
                            <font-awesome-icon icon="fa-regular fa-circle-check" />
                            <p>Our Talented & Experienced Marketing Agency</p>
                        </li>
                        <li class="d-flex gap-1">
                            <font-awesome-icon icon="fa-regular fa-circle-check" />
                            <p>Create your own skin to match your brand</p>
                        </li>
                    </ul>
                    <button class="btn btn-primary">Read more &nbsp;<font-awesome-icon icon="fa-solid fa-arrow-right"
                            class="center" /></button>

                </div>
                <div class="col-6">
                    <div class="about-img">
                        <img src="../../assets/img/1.png" alt="graphical representation of data" width="400">
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/general.scss' as *;
@use '../../styles/partials/variables' as *;
@use "bootstrap/scss/bootstrap.scss" as *;

li p {
    font-size: .9rem;
    line-height: 16px;
}

.center {
    vertical-align: text-bottom;
}
</style>
