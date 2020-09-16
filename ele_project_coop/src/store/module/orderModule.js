import { reqOrderList } from '../../api'
const state = {
  orderList: []
}
const mutations = {
  getOrderList (state, item) {
    state.orderList = item
  }
}
const actions = {
  async getOrderListAction ({ commit }) {
    let result = await reqOrderList()
    if (result.status === 200) {
      commit('getOrderList', result.data)
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