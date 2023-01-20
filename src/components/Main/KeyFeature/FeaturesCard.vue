<template lang="">
    <div class="col-3">
        <div class="card">
            <div class="ico">
                <font-awesome-icon :icon="icon" class="center"/>
            </div>
            <h6>{{title}}</h6>
            <p>{{text}}</p>
            <p class="mb-1"><a href="#">Read more <font-awesome-icon icon="fa-solid fa-chevron-right" /></a></p>
        </div>

    </div>
</template>
<script>
export default {
    props: {
        icon: String,
        title: String,
        text: String,
        readMore: String,
    },

}
</script>
<style lang="scss" scoped>
@use '../../../styles/partials/variables' as *;
@use '../../../styles/general.scss' as *;
@use "bootstrap/scss/bootstrap.scss" as *;

.card {
    padding: 1rem;
}

.ico {
    background-color: $bg-icons-features;
    display: inline;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .5rem;
    margin-bottom: 1rem;
}

.center {
    padding-left: 2px;
    padding-top: 1px;
}
</style>