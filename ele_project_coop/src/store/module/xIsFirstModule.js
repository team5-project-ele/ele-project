import { reqIndexIsfirst } from '../../api'
const state = {
  xlsfirstData:{}
}

const mutations = {
  getXIsfirstData(state,item) {
    state.xlsfirstData = item
  }
}

const actions = {
  async getXIsfirstDataActions( {commit} ){
    let result = await reqIndexIsfirst()
    if(result.status === 200){
      commit('getXIsfirstData',result.data)
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