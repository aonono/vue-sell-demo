// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import goods from './components/goods/goods'
import seller from './components/seller/seller'
import ratings from './components/ratings/ratings'
import './common/stylus/index.styl'
import '../static/css/reset.css'
// Vue.config.productionTip = false
Vue.use(Router)
Vue.use(VueResource)
const routes = [{
  path: '/',
  name: 'main',
  component: goods
}, {
  path: '/goods',
  name: 'goods',
  component: goods
}, {
  path: '/seller',
  name: 'seller',
  component: seller
}, {
  path: '/ratings',
  name: 'ratings',
  component: ratings
}]

var router = new Router({
  linkActiveClass: 'active',
  routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
