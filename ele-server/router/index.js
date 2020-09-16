const KoaRouter = require('koa-router')
const router = new KoaRouter()

// zhangrui
let GoldCoinMall = require('../datas/goldCoinMall.json')
let FirstPage = require('../datas/yifei/yifei_index/index.json')
let CategoryStore = require('../datas/yifei/yifei_deliciousFood/categoryStore.json')
let StoreList = require('../datas/yifei/yifei_index/store.json')
let HotSearch = require('../datas/yifei/yifei_search/hotSearch.json')

//lzm
let orderLists = require('../datas/orderLists/orders.json')

// 获取首页数据 ---yifei
router.get('/getFirstPage', (ctx, next) => {
  ctx.body = FirstPage
})

// 获取美食分类信息 ---yifei
router.get('/categoryStore', (ctx, next) => {
  ctx.body = CategoryStore
})

// 获取商家列表详情信息 ---yifei
router.get('/storeList', (ctx, next) => {
  ctx.body = StoreList
})

// 热门搜索 ---yifei
router.get('/hotSearch', (ctx, next) => {
  ctx.body = HotSearch
})

// 获取金币商城的数据 --zhangrui
router.get('/getGoldCoinMall', (ctx, next) => {
  ctx.body = GoldCoinMall
})

// 获取订单列表详情 ---lzm
router.get('/orderlist', (ctx, next) => {
  ctx.body = orderLists
})

module.exports = router;
