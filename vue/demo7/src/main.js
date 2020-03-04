// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from "vue-router";

Vue.use(ElementUI)

Vue.config.productionTip = false

//重写路由的push方法 解决vue项目路由出现message: "Navigating to current location (XXX) is not allowed"的问题
// 解决两次访问相同路由地址报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

//扩展Date, 直接Date转String
Date.prototype.dateFormatPad = function dateFormat(){
  const year = this.getFullYear();
  const month = this.getMonth().toString().padStart(2, '0');
  const day = this.getDate().toString().padStart(2, '0');

  return year + '-' + month + '-' + day
}
Date.prototype.dateFormat = function dateFormat(){
  const year = this.getFullYear();
  const month = this.getMonth();
  const day = this.getDate();

  return year + '-' + month + '-' + day
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
