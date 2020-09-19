import Home from '../pages/Home'
import Found from '../pages/Found'
import Order from '../pages/Order'
import Personal from '../pages/Personal'
import Login from '../pages/Login'
import Detail from '../pages/Order/Detail'
import RedEnvelopes from '../pages/Personal/RedEnvelopes'
import GoldCoin from '../pages/Personal/GoldCoin'
import Recommend from '../components/Recommend'
import Recommendation from '../components/Recommendation'
import Invitation from '../pages/Found/Invitation'
import Strteg from '../pages/Found/Strteg'
import Periphery from '../pages/Found/Periphery'
import CategoryStore from '../pages/Home/CategoryStore'
import OrderInfo from '../components/OrderInfo'
import ShippingAddress from '../pages/Personal/ShippingAddress'
import MyCustomerService from '../pages/Personal/MyCustomerService'
import Rule from '../pages/Personal/Rule'
import Search from '../pages/Home/Search'
import Details from '../components/Details'
import PersonalInformation from '../pages/Personal/PersonalInformation'

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
    path: '/found/invitation',
    component: Invitation,
    meta: {
      isHideFooter: true // 是否隐藏底部
    },
  },
  {
    path: '/found/strteg',
    component: Strteg,
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
  },
  {
    path: '/personalinformation',
    component: PersonalInformation,
    name: 'personalinformation',
    meta: {
      isHideFooter: true // 是否隐藏底部
    }
  }
]