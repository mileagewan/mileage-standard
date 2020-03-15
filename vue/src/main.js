// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// eslint-disable-next-line import/no-unresolved
import Vue from 'vue'
// eslint-disable-next-line import/no-unresolved
import App from './App'

Vue.config.productionTip = false
const a = $
console.log(a)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
