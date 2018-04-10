// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import { AjaxPlugin, LoadingPlugin } from 'vux'
import Home from './components/HelloFromVux'
import List from './components/shop_listVux'
import HomeSelect from './components/HomeSelect'
import HuoGuo from './components/HuoGuo'
Vue.use(LoadingPlugin)
Vue.use(AjaxPlugin)
Vue.use(VueRouter)
const apiPrefix = '/api/../../static/json/'
const routes = [{
  path: '/',
  component: Home,
  children: [{
    path: '/',
    component: HomeSelect
  }, {
    path: 'HuoGuo',
    component: HuoGuo
  }]
},
{
  path: '/list',
  component: List
}]
const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false
/**
 * 定义全局公用常量
 */

// Vue.prototype.serverName = serverName
Vue.prototype.apiPrefix = apiPrefix
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
