import Vue from 'vue'
import Vuex from 'vuex'
import orderModule from '@/store/module/orderModule'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    orderModule
  }
})
export default store