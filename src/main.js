import Vue from 'vue'
import App from './App.vue'
import JWT from 'jsrsasign'

Vue.config.productionTip = false
Vue.prototype.JWT = JWT

new Vue({
  render: h => h(App),
}).$mount('#app')

