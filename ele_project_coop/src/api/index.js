// 封装api接口函数
// 引入二次封装后的axios
import ajax from './ajax'



// 首页详情信息----艺飞
export const reqFirstPageInfo = () => ajax.get(`/getFirstPage`)

// 美食分类信息---艺飞
export const reqCategoryStore = () => ajax.get(`/categoryStore`)

// 商家列表信息---艺飞
export const reqStoreList = ()=> ajax.get(`/storeList`)

// 热门搜索数组数据---艺飞
export const reqHotSearch = ()=> ajax.get(`/hotSearch`)