import {reqGoldCoinMallList} from '../../api'
// 存储状态数据
const state = {
  goldCoinMallList:{}
}

const mutations = {
  getGoldCoinMallList(state,item) {
    state.goldCoinMallList = item
  }
}

const actions = {
  async getGoldCoinMallListAction ({ commit }){
    let result = await reqGoldCoinMallList()
    if(result.status === 200) {
      commit('getGoldCoinMallList',result.data.data)
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