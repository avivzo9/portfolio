import Vue from 'vue'
import app from './app.vue'
import router from './router/routes.js'
import store from './store/store'
import './assets/style/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAt, faChevronLeft, faChevronRight, faCode, faExternalLinkAlt, faLongArrowAltRight, faPhoneAlt, faStar, faTimesCircle, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGithub, faInstagram, faLinkedin, faStackExchange, faTwitter } from '@fortawesome/free-brands-svg-icons'
import vClickOutside from 'v-click-outside'
import Clipboard from 'v-clipboard'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vuetify from './plugins/vuetify'

library.add(faStar, faStackExchange, faTwitter, faCode, faLongArrowAltRight, faChevronRight ,faChevronLeft, faTimesCircle, faExternalLinkAlt, faUniversity, faFacebookF, faInstagram, faLinkedin, faGithub, faPhoneAlt, faAt);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false
Vue.use(vClickOutside)
Vue.use(Clipboard)
Vue.use(ElementUI);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(app)
}).$mount('#app')