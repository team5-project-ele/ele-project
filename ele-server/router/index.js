const KoaRouter = require('koa-router')
const router = new KoaRouter()

let FirstPage = require('../datas/yifei_index/index.json')

router.get('/test', (ctx, next) => {
  ctx.body = 1
})

// 获取首页数据 ---yifei
router.get('/getFirstPage',(ctx,next)=>{
  ctx.body = FirstPage
})

// 获取商品详情信息 ---yifei


module.exports = router