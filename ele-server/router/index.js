const KoaRouter = require('koa-router')
const router = new KoaRouter()

router.get('/test', (ctx, next) => {
  ctx.body = 1
})

module.exports = router