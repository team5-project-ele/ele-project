import Home from '../pages/Home'
import Found from '../pages/Found'
import Order from '../pages/Order'
import Personal from '../pages/Personal'
import Login from '../pages/Login'
import Detail from '../pages/Order/Detail'

export default [
  
  {
    path: '/home',
    component: Home
  },
  {
    path: '/found',
    component: Found
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/order/detail',
    component: Detail,
    meta: {
      isHideFooter: true // 是否隐藏底部
    }
  },
  {
    path: '/personal',
    component: Personal,
    name: 'personal'
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  },
  {
    path: '/',
    redirect: '/home'
  }
]