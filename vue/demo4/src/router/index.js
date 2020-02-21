import Vue from 'vue'
import Router from 'vue-router'

import Total from '../components/Total.vue'
import Home1 from '../components/登录注册切换/Home1.vue'
import Home2 from '../components/登录注册切换/Home2.vue'
import Home3 from '../components/登录注册切换/Home3.vue'
import Home from '../components/经典布局/Home.vue'
import Fisrt from '../components/经典布局/First.vue'
import Second from '../components/经典布局/second.vue'
import Father from '../components/子组件获取父组件的属性/Father.vue'
import Son from '../components/子组件获取父组件的属性/Son.vue'
import Father2 from '../components/子组件调用父组件方法/Father2.vue'
import Son2 from '../components/子组件调用父组件方法/Son2.vue'
import Father3 from '../components/父组件获取子组件的属性/Father3.vue'
import Son3 from '../components/父组件获取子组件的属性/Son3.vue'
import CustomBind from '../components/自定义指令/CustomBind.vue'
import Father4 from '../components/父组件调用子组件方法/Father4.vue'
import Son4 from '../components/父组件调用子组件方法/Son4.vue'
import Filters from '../components/过滤器/Filters.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Total
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [

      ]
    },
    {
      path: '/home1',
      name: 'Home1',
      component: Home1,
      children: [
        {
          path: 'home2',
          name: 'Home2',
          component: Home2
        },
        {
          path: 'home3',
          name: 'Home3',
          component: Home3
        }
      ]
    },
    {
      path: '/father',
      name: 'Father',
      component: Father
    },
    {
      path: '/son',
      name: 'son',
      component: Son
    },

    {
      path: '/father2',
      component: Father2
    },
    {
      path: '/son2',
      component: Son2
    },

    {
      path: '/father3',
      component: Father3
    },
    {
      path: '/son3',
      component: Son3
    },

    {
      path: '/customBind',
      component: CustomBind
    },

    {
      path: '/father4',
      component: Father4
    },
    {
      path: '/son4',
      component: Son4
    },
    
    {
      path: '/filters',
      component: Filters
    }
  ]
})
