import Vue from 'vue'

Vue.directive('focus', {

  inserted: function (el) {
    // Enfoca el elemento
    el.focus()
  }
})
