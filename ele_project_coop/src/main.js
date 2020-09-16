import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible'
import { Icon} from 'vant'
Vue.use(Icon)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
