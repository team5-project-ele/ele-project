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
// 获取商品详情信息 ---yifei


module.exports = router