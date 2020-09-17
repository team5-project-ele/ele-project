import { reqOperatingList } from '../../api'
const state = {
  operatingList:{}
}
const mutations = {
  getOperatingList (state,item) {
    state.operatingList = item
  }
}

const actions = {
  async getOperatingListAction ({commit}){
    let result = await reqOperatingList()
    console.log(result)
    if(result.status === 200){
      commit('getOperatingList',result.data.data)
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