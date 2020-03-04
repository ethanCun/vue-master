<template>
  <div>

      <el-radio-group v-model="func" @change="radioChange">
        <el-radio-button label="登录" ></el-radio-button>
        <el-radio-button label="注册"></el-radio-button>
      </el-radio-group>
<!--
      <router-link to="/page1/login">登录</router-link>
      <router-link to="/page1/register">注册</router-link> -->

      <router-view></router-view>
  </div>
</template>

<script>
  export default{
    name: 'page1',
    data(){
      return{
        func: this.$route.name,
        data: '在登录页面使用$parent访问这个属性'
      }
    },
    methods:{

      radioChange(e){

        if (e === '登录'){

          this.$router.push({
            path: '/page1/login'
          })
        }else if (e === '注册'){

          this.$router.push({
            path: '/page1/register'
          })
        }
      },
      
      callFromLogin(){
        
        alert('在登录组件中使用$parent调用这个方法')
      }
    },
    mounted() {

      //默认加载登录页面
      this.$router.push({
        path: this.$router.path
      })
    },
    watch: {

      '$route'(to){

        this.$data.func = to.name
      }
    }
  }
</script>

<style scoped="">

  .el-radio-group {
      font-size: 0;
      display: flex;
      justify-content: center;
      margin: 10px;
  }
</style>
