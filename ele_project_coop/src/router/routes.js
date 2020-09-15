import Home from '../pages/Home'
import Found from '../pages/Found'
import Order from '../pages/Order'
import Personal from '../pages/Personal'
import Login from '../pages/Login'

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