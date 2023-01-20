<template lang="">
        <div class="col-4">
            <div class="plan-card rounded-2">
                <div class="plan-name color-blue rounded-5 d-inline-block">{{planName}}</div>
                <div class="price">
                    <p class="mb-0">{{price}}</p>
                    <span>{{planTime}}</span>
                </div>
                <p class="line-3">{{textInfo}}</p>
                <hr>
                <ul>
                    <li v-for="points in services" class="d-flex gap-1">
                        <font-awesome-icon icon="fa-regular fa-circle-check" class="color-blue"/>
                        <p>{{points}}</p>
                    </li>
                </ul>
                <a href="#" class="btn btn-blu w-100">{{btnText}}</a>
                <p class="text-cc">{{textCc}}</p>

            </div>
        </div>
</template>
<script>
// import { stringifyExpression } from '@vue/compiler-core';


export default {
    name: 'PriceCard',
    props: {
        planName: String,
        price: String,
        planTime: String,
        textInfo: String,
        services: Array,
        btnText: String,
        textCc: String,
    },
    data() {
        return {
            // servicesList: ['full access', 'enhanced security', 'source files', '1 domain free', 'enhanced security']

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
    color: $grey-price-card;
}

.line-3 {
    height: 4rem;
}

.plan-name {
    padding: .3rem 1rem;
    background-color: $bg-plan-name;
    border: 1px solid $border-plan-name !important;
}

.price {
    font-weight: 600;

    p {
        font-size: 2rem;
        color: $price-color;
    }

    br {
        line-height: 10px;
    }

    span {
        font-size: .7rem;
    }
}

li {
    text-transform: capitalize;

    p {
        line-height: 16px;
    }
}

.color-blue {
    color: $blu !important;
}

.text-cc {
    color: $grey-price-card;
    margin-bottom: 0 !important;
    margin-top: 1rem !important;
    font-size: .8rem;
    font-weight: 500;
}
</style>