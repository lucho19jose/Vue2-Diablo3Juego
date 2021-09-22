import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'
import router from './router'
import store from './store'

// Traer el css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Darlo de alta
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    init () {
      store.dispatch('oauth/getToken', null, { root: true })
      console.log('Hola 🌝')
    }
  },
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
