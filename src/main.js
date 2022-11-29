import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

//  import the fontawesome core 
import { library } from '@fortawesome/fontawesome-svg-core'

// import font awesome icon component 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

new Vue({
  render: h => h(App),
}).$mount('#app')
