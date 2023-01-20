
import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faUser as fasUser } from '@fortawesome/free-solid-svg-icons'
import { faUser as farUser } from '@fortawesome/free-regular-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'














/* add icons to the library */
library.add(faUserSecret, faMagnifyingGlass, faGithub, faStackOverflow, farUser, fasUser, faChevronRight, faCircleCheck, faArrowRight, faFacebookF, faSquareFacebook, faTwitter, faTwitterSquare, faInstagram, faLinkedinIn)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')