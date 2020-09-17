import Vue from 'vue'
import Vuex from 'vuex'
import orderModule from '@/store/module/orderModule'
import operatingModule from '@/store/module/operatingModule'
import goldCoinMallModule from '@/store/module/goldCoinMallModule' 
import firstScreenModule from '@/store/module/firstScreenModule'
import xIsFirstModule from '@/store/module/xIsFirstModule'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    orderModule,
    operatingModule,
    goldCoinMallModule,
    firstScreenModule,
    xIsFirstModule
  }
})
export default store