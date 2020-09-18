import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import { Icon } from 'vant'
// 自定义事件总线
Vue.prototype.$screen = new Vue()
Vue.use(Icon)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
