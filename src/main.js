import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import store from './store'

import { Pagination } from 'element-ui';

Vue.config.productionTip = false

Vue.use(Pagination);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
