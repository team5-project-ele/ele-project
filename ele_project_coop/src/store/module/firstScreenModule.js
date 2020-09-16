import { reqFirstScreen } from '../../api'
const state = {
  firstScreenData:[]
}
const mutations = {
  getFirstScreenData(state,item) {
    state.firstScreenData = item
  }
}
const actions = {
  async getFirstScreenDataAction({commit}){
    let result = await reqFirstScreen()
    // console.log(result)
    if(result.status === 200){
      commit('getFirstScreenData',result.data)

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