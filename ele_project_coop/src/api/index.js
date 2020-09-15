// 封装api接口函数
// 引入二次封装后的axios
import ajax from './ajax'



// 首页详情信息----艺飞
export const reqFirstPageInfo = () => ajax.get(`/getFirstPage`)

// 商家商品信息---艺飞
export const reqCategoryStore = () => ajax.get(`/categoryStore`)