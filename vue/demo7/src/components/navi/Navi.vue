<template>
  <div>
    <!-- router + :index绑定menu-item跳转的路由 -->
    <!-- default-active: 默认跳转的路由 -->
    <!-- default-openeds: 默认展开第一个 -->
    <el-menu :default-active="$route.path" active-text-color="red" router @select="selectMenu"
     v-for="(item, index1) in menus" :key="index1" >

      <el-menu-item v-if="item.data.length === 0" :index="item.path">
        <template slot="title">
          <i class="el-icon-menu"></i><span>{{item.title}}</span>
        </template>
      </el-menu-item>
      <!-- el-submenu不设置index，展开关闭的时候会所有的都展开或关闭 -->
      <el-submenu :index="item.title" v-if="item.data.length > 0">

        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>{{item.title}}</span>
        </template>

        <el-menu-item v-for="(item2, index2) in item.data" :key="index2" :index="item2.path" v-if="item.data.length > 0">
          <span>{{item2.name}}</span>
        </el-menu-item>

      </el-submenu>
    </el-menu>
  </div>
</template>

<script>

  export default{
    name: 'navi',
    data(){
      return {
        menus: [{
            title: '首页',
            path: '/home',
            data: [

            ]
          },
          {
            title: '分类1',
            path: '',
            data: [{
                name: '登录注册子组件',
                path: '/page1/login'
              },
              {
                name: '对话框',
                path: '/page2'
              }
            ]
          },
          {
            title: '分类2',
            path: '',
            data: [{
                name: '表格',
                path: '/page3'
              },
              {
                name: 'tree',
                path: '/page4'
              }
            ]
          },
          {
            title: '分类3',
            path: '',
            data: [{
                name: 'page5',
                path: '/page5'
              },
              {
                name: 'page6',
                path: '/page6'
              }
            ]
          }
        ]
      }
    },
    methods:{

      selectMenu(e) {
        console.log('selectMenu: ' + JSON.stringify(e))
      }
    },
    mounted() {

      console.log('mounted: ' + JSON.stringify(this.$store.state.activeIdx))
      console.log('$route path :' + this.$route.path)
    },
  }
</script>

<style>
</style>
