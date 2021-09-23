import Vue from 'vue'

// BoostrapVue
import './plugins/BootstrapVue'
// Vue Font-Awesome
import './plugins/fontAwesome'

import './assets/css/main.styl'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    init () {
      store.dispatch('oauth/getToken', null, { root: true })
    }
  },
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
