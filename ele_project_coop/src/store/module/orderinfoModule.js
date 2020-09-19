import Vue from 'vue'
import { reqOrderInfo } from '../../api'
import { Dialog } from 'vant'
Vue.use(Dialog)
const state = {
  orderinfo: {},
  boughtList: []
}
const mutations = {
  getOrderInfo (state, info) {
    state.orderinfo = info
  },
  // 添加购物车
  async getBoughtList (state, { obj, flag, index }) {
    let info = state.boughtList.find(item => item.item_id === obj.item_id)
    if (flag) {
      if (info) {//说明已经点击过
        info.count += 1
      } else {
        Vue.set(obj, 'count', 1)
        state.boughtList.push(obj)
      }
    } else {
      if (state.boughtList[index].count <= 1) {
        Dialog.confirm({
          message: '确定删除吗？',
        })
          .then(() => {
            state.boughtList[index].count = null
            state.boughtList.splice(index, 1)
          })
          .catch(() => {
            state.boughtList[index].count = 1
          })
      } else {
        state.boughtList[index].count -= 1
      }
    }
  }
}
const actions = {
  async getOrderInfoAction ({ commit }, navId) {
    let result = await reqOrderInfo(navId)
    if (result.status === 200) {
      commit('getOrderInfo', result.data)
    }
  }
}
const getters = {

}
export default {
  state,
  mutations,
  actions,
  getters
}