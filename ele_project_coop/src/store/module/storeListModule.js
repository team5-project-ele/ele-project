
import {reqStoreList} from '../../api/index'

// 状态
const state = {
  storeList:[] , // 商家列表数组数据
  historyList:[], // 历史搜索的数据
  getAddress:'', // 地址数据
}

// 直接修改状态
const mutations = {
  // 直接修改商家列表数据
  getStoreListMutation (state,item) {
    state.storeList = item
  },

  // 添加历史数组的数据
  addHistoryListMutation (state,item) {
    // 判断数组中是否存在该值
    if (state.historyList.indexOf(item) === -1) {
      // 不存在
      state.historyList.push(item)
    }
  },

  // 清除历史状态数据
  clearHistory (state) {
    state.historyList = []
  },

  // 直接获取地址数据
  getAddressMutation (state,item) {
    state.getAddress = item
    console.log(item)
  }
}

// 间接修改状态数据
const actions = {
  // 发送请求，获取商家列表数组数据
  async getStoreListAction ({commit}) {
    const result =await reqStoreList()
    commit('getStoreListMutation',result.data.items)
  },

  // 根据关键字筛选商家数组数据
  screenStoreAction ({commit,state},value) {
    let newStoreList = state.storeList.filter(item => {
      return item.restaurant.flavors.some(event => {
        let result = event.name.indexOf(value.msg)
        if (result !== -1) {
          // 找到对象字符串
          return true
        } else {
          return false
        }
      })
    })
    commit('getStoreListMutation',newStoreList)
  },

  // 根据搜索关键字更改历史搜索数据
  changeHistoryListAction ({commit},value) {
    commit('addHistoryListMutation',value.msg)
  },

  // 获取地址
  getAddressAction ({commit},value) {
    commit('getAddressMutation',value.msg)
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