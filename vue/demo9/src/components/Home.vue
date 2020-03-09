<template>

  <div>

    <el-container>
      <el-header>
        <Navi></Navi>
      </el-header>
      <el-container>
        <el-aside>
          <MMenu></MMenu>
        </el-aside>
        <el-main>
          <Tabs></Tabs>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

  import MMenu from './common/MMenu.vue'
  import Navi from './common/Navi.vue'
  import Tabs from './common/Tabs.vue'

  export default{
    name: 'home',
    data(){
      return {

      }
    },
    components:{
      Navi,
      MMenu,
      Tabs
    },
    mounted() {

      var username = localStorage.getItem('username')

      if(!username || username === ''){

        //跳转到登录页面
        this.$router.push({
          path: '/login'
        })

      }else{

        //获取用户名和密码
      }

    }
  }
</script>

<style>

html, body{
  margin: 0;
  padding: 0;
}

.el-header{

  padding: 0;
  height: 60px;
  background: #8896B3;
}

.el-aside{

  width: 200px;
  background: #8896B3;
}

</style>
