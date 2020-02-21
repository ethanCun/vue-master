<template>

  <div class="params">

    <form>

      <label>name:</label><input type="text" v-model="name"/><br />
      <label>age:</label><input type="text" v-model="age"/><br />

      <!-- 静态传参 用to指定-->
      <router-link to="/paramsSon/10/zhangsan/28">点击静态传参</router-link><br />

      <!-- 动态传参 绑定格式 :to={name:'子组件名称', params:{键值对}}-->
      <router-link :to="{name: 'paramsSon', params:{id: id, name: name, age: age}}">点击params动态传参</router-link>

      <!-- 组件占位符 -->
      <router-view></router-view>
    </form>

    <button @click="paramsSend">在js中使用params传值</button>

  </div>
</template>

<script>
export default{
  name: 'paramsFather',
  data(){
    return {
      id: Math.random()*100,
      name: '',
      age: 0
    }
  },
  methods:{

    paramsSend: function(){

      this.$router.push({name: 'paramsSon', params:{id: this.id, name: this.name, age: this.age}})
      
      //用path不行， 因为param方式传参， 在路由中设置了path的格式为、paramsSon/:id/:name/:age
      // this.$router.push({path: 'paramsSon', params: {id: this.id, name: this.name, age: this.age}})
    }
  }
}
</script>

<style>
</style>
