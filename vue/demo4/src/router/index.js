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
import QueryFather from '../components/query传值/QueryFather.vue'
import QuerySon from '../components/query传值/QuerySon.vue'
import ParamsFather from '../components/params传值/paramsFather.vue'
import ParamsSon from '../components/params传值/paramsSon.vue'
import Watch from '../components/watch观察属性变化/Watch.vue'
import Child1 from '../components/watch观察属性变化/child1.vue'
import Child2 from '../components/watch观察属性变化/child2.vue'
import Computed from '../components/computed计算属性的使用/Computed.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Total
    },

//  路由实现登录注册切换
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [

      ]
    },

// 路由实现经典布局
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

// 子组件获取父组件属性
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

// 演示子组件调用父组件方法：
    {
      path: '/father2',
      component: Father2
    },
    {
      path: '/son2',
      component: Son2
    },

// 父组件获取子组件的值
    {
      path: '/father3',
      component: Father3
    },
    {
      path: '/son3',
      component: Son3
    },

// 自定义指令演示自动聚焦:
    {
      path: '/customBind',
      component: CustomBind
    },

// 演示父组件调用子组件方法：
    {
      path: '/father4',
      component: Father4
    },
    {
      path: '/son4',
      component: Son4
    },

// 过滤器
    {
      path: '/filters',
      component: Filters
    },

// query传值 正常的path
    {
      path: '/queryFather',
      component: QueryFather
    },
    {
      path: '/querySon',
      name: 'querySon',
      component: QuerySon
    },

// params传值 一个组件对用多个path
    {
      path: '/paramsFather',
      component: ParamsFather
    },
    {
      path: '/paramsSon/:id/:name/:age',
      name: 'paramsSon',
      component: ParamsSon
    },
    {
      path: '/paramsSon/:id/:name',
      name: 'paramsSon',
      component: ParamsSon
    },

// 使用watch观察属性变化
    {
      name: 'watch',
      path: '/watch',
      component: Watch,
      children: [
        {
          name: 'child1',
          path: 'child1',
          component: Child1
        },
        {
          name: 'child2',
          path: 'child2',
          component: Child2
        }
      ]
    },
    
// 计算属性computed的使用
    {
      name: 'computed',
      path: '/computed',
      component: Computed
    },
	
//vuex状态管理
	{
	  name: 'Count',
	  path: '/count',
	  component: Count
	},
	{
	  name: 'GetCount',
	  path: '/getCount',
	  component: GetCount
	}
  ]
})
