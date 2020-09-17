import Home from '../pages/Home'
import Found from '../pages/Found'
import Order from '../pages/Order'
import Personal from '../pages/Personal'
import Detail from '../pages/Order/Detail'
import Recommend from '../components/Recommend'
import Recommendation from '../components/Recommendation'
import Periphery from '../pages/Found/Periphery'
import CategoryStore from '../pages/Home/CategoryStore'
import OrderInfo from '../components/OrderInfo'
import Search from '../pages/Home/Search'
import RestaurantInfo from '../components/OrderInfo/RestaurantInfo'
import Details from '../components/Details'

export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/found',
    component: Found,
  },
  {
    path: '/found/recommend',
    component: Recommend,
    meta: {
      isHideFooter: true // 是否隐藏底部
    }
  },
  {
    path: '/found/recommendation',
    component: Recommendation,
    meta: {
      isHideFooter: true // 是否隐藏底部
    },
  },
  {
    path: '/found/periphery',
    component: Periphery,
    meta: {
      isHideFooter: true // 是否隐藏底部
    }
  },
  {
    path: '/found/details',
    component: Details,
    meta: {
      isHideFooter: true
    }
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
    children: [
      {
        path: '/orderinfo/restaurantinfo',
        component: RestaurantInfo
      }
    ],
    meta: {
      isHideFooter: true
    }
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/categorystore',
    component: CategoryStore
  },
  {
    path: '/search',
    component: Search
  }
]