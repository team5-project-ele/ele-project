import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible'
<<<<<<< HEAD
import VueRouter from 'vue-router';



=======
import { Icon } from 'vant'
Vue.use(Icon)
>>>>>>> 65f92c09acac612268e391fdc2e82f7cbd26db91
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
