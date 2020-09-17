const KoaRouter = require('koa-router')
const router = new KoaRouter()



let FirstPage = require('../datas/yifei/yifei_index/index.json')
let CategoryStore = require('../datas/yifei/yifei_deliciousFood/categoryStore.json')
let StoreList = require('../datas/yifei/yifei_index/store.json')
let HotSearch = require('../datas/yifei/yifei_search/hotSearch.json')

//lzm
let orderLists = require('../datas/orderLists/orders.json')
// zhangrui
let operatingList = require('../datas/zhangrui_goldCoinMall/operating.json')
let GoldCoinMall = require('../datas/zhangrui_goldCoinMall/goldCoinMall.json')
let firstScreen = require('../datas/zhangrui_firstScreen/firstScreen.json')
let indexIsfirst = require('../datas/zhangrui_firstScreen/indexIsfirst.json')


let goldcoin = require('../datas/zhangtao_Personal/goldcoin.json')


router.get('/test', (ctx, next) => { 
  ctx.body = 1
})

// 获取首页数据 ---yifei
router.get('/getFirstPage', (ctx, next) => {
  ctx.body = FirstPage
})

// 获取验证码---zhangtao
router.get('/getcaptcha', (ctx,next) => {
  let str = '1234567890'
  let code = ''
  for(let i = 0; i < 6; i++){
    code += str[Math.floor(Math.random()*6)]
  }
  code = code>>>0
  ctx.body = code
})

// 获取personal下的goldcoin
router.get('/getgoldcoin', (ctx,next) => {
  ctx.body = goldcoin
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

//获取金币商城的商品操作数据---zhangrui
router.get('/getOperating',(ctx,next)=>{
  ctx.body = operatingList
})

// 获取金币商城的全部商品数据 --zhangrui
router.get('/getGoldCoinMall',(ctx,next)=>{
  ctx.body = GoldCoinMall
})

// 获取发现屏轮播界面--zhangrui
router.get('/getfirstScreen',(ctx,next)=>{
  ctx.body = firstScreen
})
// 获取轮播界面内部的页面数据--zhangrui
router.get('/getindexIsfirst',(ctx,next)=>{
  ctx.body = indexIsfirst
})

// 获取订单列表详情 ---lzm
router.get('/orderlist', (ctx, next) => {
  ctx.body = orderLists
})

module.exports = router;
