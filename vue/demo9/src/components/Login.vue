<template>

  <div class="loginBg">
    <div class="loginDiv">

      <el-form label-position="left"  background="red" class="loginForm">
        <el-form-item label="用户名" label-width="80px">
          <el-input placeholder="请输入账号" v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="80px">
          <el-input placeholder="请输入密码" v-model="password"></el-input>
        </el-form-item>
        <el-form-item label-width="10px">
          <div style="display: flex; justify-content: flex-end;">
            <el-button @click="login" style="position: absolute; margin: 30px auto;">登 录</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
  export default{
    name: 'login',
    data(){
      return{
        username:'',
        password: ''
      }
    },
    methods:{
      login(){

        //写入localStrorage
        localStorage.setItem('username', this.username)

        this.$router.push({
          path: '/components'
        })
      }
    }
  }
</script>

<style scoped="">

  body{
    margin: 0;
    padding: 0;
  }

  .loginBg{

    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    background-image: url(../assets/img/bgIcon.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 0;
  }

  .loginDiv{

    background: #409EFF;
    width: 500px;
    height: 300px;
    position: absolute;
    right: 50px;
    /* border-radius: 20px; */
  }

  .loginForm{

    margin: 30px;
  }

</style>
