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
    path:'/found/recommend',
    component:Recommend,
    meta: {
      isHideFooter: true // 是否隐藏底部
    }
  },
  {
    path:'/found/recommendation',
    component:Recommendation,
    meta: {
      isHideFooter: true // 是否隐藏底部
    }
  },
  {
    path:'/found/periphery',
    component:Periphery,
    meta: {
      isHideFooter: true // 是否隐藏底部
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
  }
]