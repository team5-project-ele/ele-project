import Home from '../pages/Home'
import Found from '../pages/Found'
import Order from '../pages/Order'
import Personal from '../pages/Personal'
import Detail from '../pages/Order/Detail'
import OrderInfo from '../components/OrderInfo'
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
    component: Personal
  },
  {
    path: '/orderinfo',
    component: OrderInfo,
    meta: {
      isHideFooter: true
    }
  },
  {
    path: '/',
    redirect: '/home'
  }
]