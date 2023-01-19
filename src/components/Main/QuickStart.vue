<script >

export default {
    name: "QuickStart",
    data() {
        return {
            devToolsList: ['npm', 'nuget', 'spm', 'github']
        };
    },
}

//import
</script>

<template>
    <section id="quick-start">
        <div class="container">
            <div class="row text-center">
                <div class="col-12">
                    <h2>Awesome isn't it? Let's dive in!</h2>
                    <p>Start working with <span>Landrick</span> that can provide everything you need to generate<br>
                        awareness, drive traffic,connect.</p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-8">
                    <div class="box rounded-1">
                        <ul class="d-flex text-center rounded-1">
                            <li class="rounded-1" v-for="tool in devToolsList">
                                {{ tool }}
                            </li>
                        </ul>
                        <div class="text-tip d-flex gap-2">
                            <p><span>&dollar;</span> npm install</p>
                            <p><span>-g</span> claps.js</p>
                        </div>
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

.box {
    width: 550px;
    height: 100px;
    background-color: $bg-dev-tools;
    padding: 20px;
}

ul {
    border: 1px solid $border-dev-tool;
    background-color: $dev-tool;
    padding: 0;
}

li {
    width: 100%;
    color: $bg-white;
    padding: .3rem 0;
    cursor: pointer;

    &:first-child {
        background-color: $bg-dev-tools;
    }
}

.text-tip {
    font-size: .9rem;
    color: $grey-text;

    span {
        color: $green-symbol;
    }
}
</style>
