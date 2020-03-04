import Vue from 'vue'
import Router from 'vue-router'
import Navi from '../components/navi/Navi.vue'
import Home from '../components/Home.vue'
import Page1 from '../components/Page1.vue'
import Page2 from '../components/Page2.vue'
import Page3 from '../components/Page3.vue'
import Page4 from '../components/Page4.vue'
import Page5 from '../components/Page5.vue'
import Page6 from '../components/Page6.vue'
import Login from '../components/登录注册/Login.vue'
import Register from '../components/登录注册/Register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/navi',
      name: 'navi',
      component: Navi
    },
    {
      path: '/home',
      name: '首页',
      component: Home
    },
    {
      path: '/page1',
      name: '登录注册子组件',
      component: Page1,
      children:[
        {
          path: 'login',
          name: '登录',
          component: Login
        },
        {
          path: 'register',
          name: '注册',
          component: Register
        }
      ]
    },
    {
      path: '/page2',
      name: '对话框',
      component: Page2
    },
    {
      path: '/page3',
      name: '表格',
      component: Page3
    },
    {
      path: '/page4',
      name: 'tree',
      component: Page4
    },
    {
      path: '/page5',
      name: 'page5',
      component: Page5
    },
    {
      path: '/page6',
      name: 'page6',
      component: Page6
    }
  ]
})
