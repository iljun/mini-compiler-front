import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'

import VueLodash from 'vue-lodash'
import VueMoment from 'vue-moment'

Vue.config.productionTip = false

Vue.use(VueMoment)
Vue.use(VueLodash)

new Vue({
  render: h => h(App),
}).$mount('#app')
