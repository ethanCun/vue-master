import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import MMenu from '../components/common/MMenu.vue'
import Navi from '../components/common/Navi.vue'
import Tabs from '../components/common/Tabs.vue'
import Components from '../components/views/Components.vue'
import Dashboard from '../components/views/Dashboard.vue'
import DirectivePermission from '../components/views/DirectivePermission.vue'
import Documentation from '../components/views/Documentation.vue'
import Guide from '../components/views/Guide.vue'
import Icons from '../components/views/Icons.vue'
import Markdown from '../components/views/Markdown.vue'
import Permission from '../components/views/Permission.vue'
import Tinymce from '../components/views/Tinymce.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home,
      children:[
        {
          path: '/mmenu',
          name: 'mmenu',
          component: MMenu
        },
        {
          path: '/navi',
          name: 'navi',
          component: Navi
        },
        {
          path: '/tabs',
          name: 'tabs',
          component: Tabs
        },
        {
          path: '/components',
          name: 'components',
          component: Components
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: '/directivePermission',
          name: 'directivePermission',
          component: DirectivePermission
        },
        {
          path: '/documentation',
          name: 'documentation',
          component: Documentation
        },
        {
          path: '/guide',
          name: 'guide',
          component: Guide
        },
        {
          path: '/icons',
          name: 'icons',
          component: Icons
        },
        {
          path: '/markdown',
          name: 'markdown',
          component: Markdown
        },
        {
          path: '/permission',
          name: 'permission',
          component: Permission
        },
        {
          path: '/tinymce',
          name: 'tinymce',
          component: Tinymce
        },
      ]
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    },

  ]
})
