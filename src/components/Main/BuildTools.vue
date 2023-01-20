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
                    <p class="py-3">You can combine all the Landrick templates into a single one, you can take a
                        component from the Application theme and use it in the Website.</p>
                    <ul>
                        <li class="d-flex gap-1">
                            <font-awesome-icon icon="fa-regular fa-circle-check" class="color-blue fs-1" />
                            <p>Digital Marketing Solution for Tomorrow</p>
                        </li>
                        <li class="d-flex gap-1">
                            <font-awesome-icon icon="fa-regular fa-circle-check" class="color-blue fs-1" />
                            <p>Our Talented & Experienced Marketing Agency</p>
                        </li>
                        <li class="d-flex gap-1">
                            <font-awesome-icon icon="fa-regular fa-circle-check" class="color-blue fs-1" />
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

#build-tools {
    padding: 70px 0;
}

li p {
    font-size: .9rem;
}

.center {
    vertical-align: text-bottom;
}

.color-blue {
    color: $blu;
}

.fs-1 {
    font-size: .4rem;
}
</style>
