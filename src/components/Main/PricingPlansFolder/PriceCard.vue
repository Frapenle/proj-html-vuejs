<template lang="">
    <div>
        <div class="plan-card rounded-2">
            <div class="sticker rounded-5 d-inline-block">Basic</div>
            <div class="price">&dollar; 9
                <br>
                <span>Per month</span>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <br>
            <ul>
                <li class="d-flex gap-1" v-for="(item,i) in servicesList" :key="i">
                    <font-awesome-icon icon="fa-regular fa-circle-check" class="color-blue"/>
                    <p>{{item}}</p>
                </li>
            </ul>
            <a href="#" class="btn btn-primary w-100">Buy now</a>
            <p class="text-cc">*No credit card required</p>

        </div>
    </div>
</template>
<script>

export default {
    name: 'PriceCard',
    data() {
        return {
            servicesList: ['full access', 'enhanced security', 'source files', '1 domain free', 'enhanced security']

        }
    },

}
</script>
<style lang="scss">
@use '../../../styles/general.scss' as *;
@use '../../../styles/partials/variables' as *;
@use "bootstrap/scss/bootstrap.scss" as *;

.plan-card {
    border: 1px solid black;
    padding: 17px;
}

.sticker {
    padding: .3rem 1rem;
    background-color: $bg-sticker;
    border: 1px solid $border-sticker !important;
}

.price {
    font-size: 2rem;
    font-weight: 600;
}

li {
    text-transform: capitalize;

    .color-blue {
        color: $blu !important;
    }

    p {
        line-height: 16px;
    }
}

.text-cc {
    color: $grey-price-card;
    margin-bottom: 0 !important;
    margin-top: 1rem !important;
    font-size: .7rem;
}
</style>