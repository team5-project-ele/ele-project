import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)
// 创建路由
const router = new VueRouter({
  routes
})
export default router