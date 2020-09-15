// 封装api接口函数
// 引入二次封装后的axios
import ajax from './ajax'
// http://182.92.128.115/api/product/getBaseCategoryList

// 获取首页商品信息
export const reqFirstPageInfo = () => ajax.get(`/getFirstPage`)
// 获取订单详情的接口
export const reqOrderList = () => ajax.get(`/orderlist`)
// 获取订单商品的详情
export const reqOrderItem = (id) => ajax.get(`/getorderitems?id=${id}`)