const Koa = require('koa')
const router = require('./router')
const app = new Koa()
// 声明使用路由器
app
  .use(router.routes())
  .use(router.allowedMethods())
  
app.listen('5000', () => {
  console.log('服务器启动成功')
  console.log('服务器地址：http://localhost:5000')
})