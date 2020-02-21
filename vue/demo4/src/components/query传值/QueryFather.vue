<template>

  <div>

    <p>演示query传值:</p>
    <router-link to="/querySon?id=1&name=zhangsan&age=100">点击query静态传参</router-link><br />

    <form>
      <input type="text" v-model="name"/><br />
      <input type="text" v-model="age"/><br />

      方式1：使用name, 前提是在路由中设置了name：<br />
      <router-link :to="{name: 'querySon', query: {id: id, name: name, age: age}}">点击query动态传参</router-link>
      <br />

      方式2： 使用path:
      <router-link :to="{path: 'querySon', query: {id: id, name: name, age: age}}">点击query动态传参</router-link>

    </form>

    <router-view></router-view>

    方式3：在js中跳转传值：<br />
    <input type="button" value="点击query跳转传值" @click="querySend"/>
    
  </div>
</template>

<script>


  export default {
    name: 'queryFather',
    data(){
      return {
        id: Math.random()*1000,
        name: '',
        age: ''
      }
    },
    methods:{

      querySend: function(){

        //使用$router 进行query形式传参
        //this.$router.push({name: 'querySon', query:{id: this.id, name: this.name, age: this.age}})
        this.$router.push({path: 'querySon', query:{id: this.id, name: this.name, age: this.age}})
      }
    }
  }
</script>

<style>
</style>
