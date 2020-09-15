const KoaRouter = require('koa-router')
const router = new KoaRouter()

let FirstPage = require('../datas/yifei_index/index.json')
let orderLists = require('../datas/orderLists/orders.json')
router.get('/test', (ctx, next) => {
  ctx.body = 1
})

// 获取首页数据 ---yifei
router.get('/getFirstPage', (ctx, next) => {
  ctx.body = FirstPage
})

// 获取商品详情信息 ---yifei

// 获取订单列表详情 ---lzm
router.get('/orderlist', (ctx, next) => {
  ctx.body = orderLists
})

module.exports = router