import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexpage',
      component: function (resolve) {
        require(['@/pages/index-page'], resolve)
      }
    },
    {
      path: '/articleList/:type',
      name: 'articleList',
      component: function (resolve) {
        require(['@/pages/articleList'], resolve)
      }  
    },
    {
      path: '/article/:id',
      name: 'article',
      component: function (resolve) {
        require(['@/pages/article'], resolve)
      }  
    }
  ]
})
