<template lang="">
            <div class="links-container d-flex justify-content-around">
                <div id="company">
                    <h5>Company</h5>
                    <ul>
                        <li v-for="(item, i) in companyList" :key="i"><a href="#">
                            {{item}}
                        </a>
                        </li>
                    </ul>
                </div>
                <div id="usefull-links">
                    <h5>Usefull Links</h5>
                    <ul>
                        <li v-for="(link, index) in usefullLinks" :key="index"><a href="#">
                            {{link}}
                        </a></li>
                    </ul>
                </div>
            </div>
</template>
<script>
export default {
    name: 'FooterLinks',
    data() {
        return {
            companyList: ['About us', 'Services', 'Team', 'Pricing', 'Project', 'Careers', 'Blog', 'Login'],
            usefullLinks: ['Terms of Service', 'Privacy Policy', 'Documentation', 'Changelog', 'Components']
        }
    },

}
</script>
<style lang="scss" scoped>
@use '../../../styles/general.scss' as *;
@use '../../../styles/partials/variables' as *;
@use "bootstrap/scss/bootstrap.scss" as *;

h5,
a {
    color: $text-col-white !important;
}
</style>