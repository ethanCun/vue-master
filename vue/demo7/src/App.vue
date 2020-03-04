<template>
  <div id="app">

    <el-container>

      <el-header>{{$route.path}},{{$route.name}}</el-header>
      <el-container>
        <el-aside>
          <navi></navi>
        </el-aside>
        <el-main>

          <!-- 标签区 -->
          <!-- v-model:选中选项卡的 name -->
          <el-tabs v-model="editingTab" type="card" closable="" @tab-remove="removeTab" @tab-click="selectTab">
            <el-tab-pane v-for="(item, index) in tabs" :key="item.title" :label="item.title" :name="item.name">

            </el-tab-pane>
          </el-tabs>

          <!-- 内容区 -->
          <router-view />

        </el-main>
      </el-container>

      <!-- <el-footer>Footer</el-footer> -->
    </el-container>



  </div>
</template>

<script>

  import store from './store/index.js'
  import navi from './components/navi/Navi.vue'

  export default {
    name: 'App',
    data() {
      return{
          editingTab: 'page1', //当前选择的标签栏
          tabs: [], //所有的标签栏
      }
    },
    methods: {

      selectTab(e) {

        console.log('selectMenu: ' + e.name)
        var name = e.name;

        this.$router.push({
          name: name
        })
      },

      removeTab(name) {
        
        console.log('removeTab: ' + name)

        //移除名称一致的标签
        for (var i = 0; i < this.$data.tabs.length; i++) {
          const tab = this.$data.tabs[i];
          if (tab.name === name) {
            this.$data.tabs.splice(i, 1)

            //移除之后默认显示之后一个标签
            if (this.$data.tabs.length > 0) {
              this.$data.editingTab = this.$data.tabs[i].name
            }

            //重置当前路由path
            if (this.$data.tabs.length == 0) {
              this.$router.push({
                path: '/'
              })
            } else {
              this.$router.push({
                path: '/' + this.$data.editingTab
              })
            }

          }
        }


      }
    },
    components: {
      navi
    },
    mounted() {

      console.log('mounted: ' + JSON.stringify(this.$store.state.activeIdx))
      console.log('$route path :' + this.$route.path)

      //页面刷新 加载默认显示page1
      var obj = new Object()
      obj.title = this.$route.name
      obj.name = this.$route.name
      obj.path = this.$route.path
      this.$data.tabs.push(obj)
      
      this.$data.editingTab = this.$route.name
    },
    //监听路由变化
    watch: {

      '$route'(to, from) {

        if (to.path === '/') {

          this.$router.push({
            path: '/home'
          })
        }

        //记录当前点击的标签
        this.editingTab = to.name

        //判断tabs是否已经包含了该name的标签
        var isContain = false
        for (var i = 0; i < this.$data.tabs.length; i++) {

          const tab = this.$data.tabs[i];
          if (tab.name === to.name) {
            var isContain = true
          }
        }

        if (isContain == false) {

          var obj = new Object()
          obj.title = obj.name = to.name
          if (to.path != '/') {
            this.$data.tabs.push(obj)
            //保存到vuex
            this.$store.commit('update_activeIdx', obj)
          }
        }

        console.log('watch: ' + JSON.stringify(this.$store.state.activeIdx))
      }
    },
    store
  }
</script>

<style>
  .el-header,
  .el-footer {

    background: #EFEFEF;
    line-height: 60px;
    text-align: center;
  }
</style>
