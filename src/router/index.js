import Vue from 'vue'
import Router from 'vue-router'
import Position from '@/components/position/position'
import Detail from '@/components/position/detail'
import Search from '@/components/search/search'
import My from '@/components/my/my'
import Footer from '@/components/footer/Footer'
import Ulul from '@/components/position/ul'
//登录注册
import Reg from '@/components/my/reg'
import Login from '@/components/my/login'

Vue.use(Router)

export default new Router({
  /*
  {path: '/position',name: 'position',component: Position,
      children:[{path: '/position/detail',name: 'detail',component: Detail}]
    },*/
  routes: [
    {path: '/position',name: 'position',component: Position,
      children:[{path: '/position/detail',name: 'detail',component: Detail},
      {
        path: '/position',name: 'ulul',component: Ulul
      }]
    },

    {path: '/search',name: 'search',component: Search},
    {path: '/my',name: 'my',component: My},
    {path: '/reg',name: 'reg',component: Reg},
    {path: '/login',name: 'login',component: Login},
    {path: '/',redirect:'position'}
  ]
})
