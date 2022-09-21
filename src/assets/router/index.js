import Vue from 'vue'
import Router from 'vue-router'

// eslint-disable-next-line import/no-duplicates
/* import index from '@/view/index' */
/* import shopee from '@/view/shopee' */
/* import amz from '@/view/amz' */
/* import amzuk from '@/view/amzuk' */
import upus from '@/view/upus'
Vue.use(Router)

export default new Router({
  routes: [
    /* {
      path: '/',
      name: 'shopee',
      component: shopee,
      meta: {
        title: 'shopee',
        keepAlive: false
      }
    } */
    /* {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        title: 'index',
        keepAlive: false
      }
    } */
    /* {
      path: '/',
      name: 'amz',
      component: amz,
      meta: {
        title: 'amz',
        keepAlive: false
      }
    } */
    /* {
      path: '/',
      name: 'amzuk',
      component: amzuk,
      meta: {
        title: 'amzuk',
        keepAlive: false
      }
    } */
    {
      path: '/',
      name: 'upus',
      component: upus,
      meta: {
        title: 'upus',
        keepAlive: false
      }
    }
  ]
})
