import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible'
import VueRouter from 'vue-router';



Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
