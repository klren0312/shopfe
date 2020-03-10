import Vue from 'vue'
import 'normalize.css'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/responsive'

import { Button, ButtonGroup, Toast, Swiper, Tabbar, Price, CountDown } from '@nutui/nutui'

[Button, ButtonGroup, Toast, Swiper, Tabbar, Price, CountDown].forEach(v => v.install(Vue))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
