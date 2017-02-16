import Vue from 'vue'
import Router from 'vue-router'
import http from '../http'
import filters from '../filters'
import App from '../App'
import Home from 'views/article/Home'
import Category from 'views/article/Category'
import ArticleList from 'views/article/ArticleList'
import Article from 'views/article/Article'

Vue.use(Router)
filters.init(Vue)
Vue.prototype.$http = http

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: '/cate/:cateId',
          component: Category
        },
        {
          path: '/articleList/:cateId',
          component: ArticleList
        },
        {
          path: '/article/:id',
          component: Article
        }
      ]
    }
  ]
})
