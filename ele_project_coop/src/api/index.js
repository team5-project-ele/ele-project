// 封装api接口函数
// 引入二次封装后的axios
import ajax from './ajax'



// 首页详情信息----艺飞
export const reqFirstPageInfo = () => ajax.get(`/getFirstPage`)

// 商家商品信息---艺飞
export const reqCategoryStore = () => ajax.get(`/categoryStore`)

// 获取订单详情的接口
export const reqTradeInfo = () => ajax.get(`/order/auth/trade`)


// 获取验证码的接口
export const reqGetCaptcha = () => ajax.get(`/getcaptcha`)
export const reqOrderList = () => ajax.get(`/orderlist`)
// 获取订单商品的详情
export const reqOrderItem = (id) => ajax.get(`/getorderitems?id=${id}`)
