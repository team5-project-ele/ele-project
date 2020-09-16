// 封装api接口函数
// 引入二次封装后的axios
import ajax from './ajax'



// 首页详情信息----艺飞
export const reqFirstPageInfo = () => ajax.get(`/getFirstPage`)

// 美食分类信息---艺飞
export const reqCategoryStore = () => ajax.get(`/categoryStore`)

// 获取订单详情的接口
export const reqOrderList = () => ajax.get(`/orderlist`)
// 获取订单商品的详情
export const reqOrderItem = (id) => ajax.get(`/getorderitems?id=${id}`)

// 商家列表信息---艺飞
export const reqStoreList = ()=> ajax.get(`/storeList`)

// 热门搜索数组数据---艺飞
export const reqHotSearch = ()=> ajax.get(`/hotSearch`)
// 获取金币商城数据（公共组件） --张蕊
export const reqOperatingList =() => ajax.get('/getOperating')
export const reqGoldCoinMallList = () => ajax.get('/getGoldCoinMall')
export const reqFirstScreen = () => ajax.get('/getfirstScreen')
export const reqIndexIsfirst = () =>ajax.get('/getindexIsfirst')


