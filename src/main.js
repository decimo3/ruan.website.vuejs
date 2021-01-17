import Vue from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.css'

Vue.config.productionTip = false
Vue.prototype.$usuario = {
  isLogado: false,
}

new Vue({
  render: h => h(App),
}).$mount('#app')

