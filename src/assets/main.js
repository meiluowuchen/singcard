// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {request} from './utils/request'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)
// 定义全局变量
Vue.prototype.$axios = request
Vue.config.productionTip = false
// 全局后置钩子
router.afterEach(to => {
  // 设置title
  document.title = to.meta.title
})

router.beforeEach((to, from, next) => {
  const path = to.path
  let index = to.fullPath.indexOf('?')
  console.log(index)
  var result = ''
  // eslint-disable-next-line eqeqeq
  if (index != -1) {
    result = '?' + to.fullPath.substr(index + 1, to.fullPath.length)
  } else {
    result = ''
  }
  const disLength = path.length
  const shortName = path.substring(disLength - 11, disLength - 5)
  const lang = shortName.substring(shortName.length - 2, shortName.length)
  const reg = /^[A-Z]+$/
  if (reg.test(lang)) {
    localStorage.setItem('lang', lang)
  }
  const lastpath = to.path.replace(shortName, '')
  // eslint-disable-next-line eqeqeq
  if (shortName.indexOf('_') != -1 && shortName.indexOf('-') > 0) {
    // eslint-disable-next-line eqeqeq
    if (shortName.indexOf('cid') != -1) {
      next({
        path: lastpath + '?cid=' + Math.floor(Math.random() * 100)
      })
    } else {
      next({
        path: lastpath + result + '?cid=' + Math.floor(Math.random() * 100)
      })
    }
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
