import Vue from 'vue'
import 'normalize.css'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { Button, Toast, Swiper, Tabbar } from '@nutui/nutui'

[Button, Toast, Swiper, Tabbar].forEach(v => v.install(Vue))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
