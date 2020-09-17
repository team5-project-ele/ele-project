import Home from '../pages/Home'
import Found from '../pages/Found'
import Order from '../pages/Order'
import Personal from '../pages/Personal'
import Login from '../pages/Login'
import Detail from '../pages/Order/Detail'
import RedEnvelopes from '../pages/Personal/RedEnvelopes'
import GoldCoin from '../pages/Personal/GoldCoin'
import Recommend from '../components/Recommend'
import Recommendation from '../pages/Found/Recommendation'
import Periphery from '../pages/Found/Periphery'
import CategoryStore from '../pages/Home/CategoryStore'
import OrderInfo from '../components/OrderInfo'
<<<<<<< HEAD
import  ShippingAddress from '../pages/Personal/ShippingAddress'
import MyCustomerService from '../pages/Personal/MyCustomerService'
import Rule from '../pages/Personal/Rule'
=======
import Search from '../pages/Home/Search'
import RestaurantInfo from '../components/OrderInfo/RestaurantInfo'
import Details from '../components/Details'
>>>>>>> c0e55c3866b5b2d28456c0b73244a9cad87a5d61

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
    }
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
    component: Personal,
    name: 'personal',
    children: [
      {
        path: '/personal/redenvelopes',
        component: RedEnvelopes,
        name: 'redenvelopes',
        meta: {
          isHideFooter: true // 是否隐藏底部
        }
      },
      {
        path: '/personal/goldcoin',
        component: GoldCoin,
        name: 'goldcoin',
        meta: {
          isHideFooter: true // 是否隐藏底部
        }
      },
      {
        path: '/personal/shippingaddress',
        component: ShippingAddress,
        name: 'shippingaddress',
        meta: {
          isHideFooter: true // 是否隐藏底部
        }
      },
      {
        path: '/personal/mycustomerservice',
        component: MyCustomerService,
        name: 'mycustomerservice',
        meta: {
          isHideFooter: true // 是否隐藏底部
        }
      },
      {
        path: '/personal/rule',
        component: Rule,
        name: 'rule',
        meta: {
          isHideFooter: true // 是否隐藏底部
        }
      }
    ]
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
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