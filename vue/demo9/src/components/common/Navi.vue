<template>
  <div id="navi">
    <p class="title"><span>system administrator</span></p>
    <div class="user">
      <el-dropdown>
        <template>
            <i class="el-icon-s-custom" style="line-height: 60px; font-size: 35px;"></i>
          </template>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <p><span @click="personInfo">个人信息</span></p>
            </el-dropdown-item>
            <el-dropdown-item>
              <p><span @click="logout">退出登录</span></p>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-dropdown>
    </div>
  </div>
</template>

<script>

  import store from '../../store/index.js'

  export default{
    name: 'navi',
    data(){
      return {

      }
    },
    store,
    methods:{

      personInfo(){

      },

      logout(){

        //重置
        this.$store.state.activeTabName = 'components'
        //清空缓存
        localStorage.removeItem('username')

        this.$router.push({
          path: '/login'
        })
      }
    }
  }
</script>

<style>

  #navi{
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }

  .title{
    flex:20;
    padding-left: 10px;
  }

  .user{
    flex:1;
    height: 60px;
    display: flex;
    justify-content: center;
  }

</style>
