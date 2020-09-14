// 封装api接口函数
// 引入二次封装后的axios
import ajax from './ajax'
// http://182.92.128.115/api/product/getBaseCategoryList

// 获取商品详情信息
export const reqDetailInfo = (skuId) => ajax.get(`/item/${skuId}`)

// 添加购物车的接口(也可以修改商品的数量)
export const reqAddToCart = (skuId, skuNum) => ajax.post(`/cart/addToCart/${skuId}/${skuNum}`)

// 获取购物车商品信息数据接口
export const reqShopCartList = () => ajax.get(`cart/cartList`)

// 根据商品的skuId删除商品信息数据
export const reqDeleteCartItem = (skuId) => ajax.delete(`/cart/deleteCart/${skuId}`)

// 根据商品的skuId和isChecked修改商品的选中状态
export const reqChangeCheckedCartItem = (skuId, isChecked) => ajax.get(`/cart/checkCart/${skuId}/${isChecked}`)

// 根据手机号码和密码实现登录的接口
export const reqLogin = (mobile, password) => ajax.post(`/user/passport/login`, { mobile, password })
// 根据手机号码和密码和图形验证码实现注册接口
export const reqRegister = (userInfo) => ajax.post(`/user/passport/register`, userInfo)
// 退出的接口
export const reqLoginOut = () => ajax.get(`/user/passport/logout`)



// 获取订单详情的接口
export const reqTradeInfo = () => ajax.get(`/order/auth/trade`)


export const reqFirstPageInfo = () => ajax.get(`/getFirstPage`)