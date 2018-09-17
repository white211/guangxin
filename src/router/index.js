import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/index/index'
import Home from '../components/home'
import Config from '../components/config'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'index',
      component:Index,
      redirect:'/home',
      children:[
        {
          path:'/home',
          name:'home',
          component:Home
        },
        {
          path:'/config',
          name:'config',
          component:Config
        }
      ]
    }
  ]
})
