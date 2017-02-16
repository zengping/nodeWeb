import Vue from 'vue'
import Router from 'vue-router'
import http from '../http'
import filters from '../filters'
import Home from 'views/article/Home'
import Category from 'views/article/Category'

Vue.use(Router)
filters.init(Vue)
Vue.prototype.$http = http

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/cate/:cateId',
      component: Category
    }
  ]
})
