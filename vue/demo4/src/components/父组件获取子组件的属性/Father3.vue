<template>
  
  <div>
    
    <input type="button" value="点击获取子组件的值" @click="getDataFromSon3"/>
    <p>子组件的值为:{{fathermsg3}}</p>
    
    <son3 ref="son3"></son3>
  </div>
</template>

<script>
  
  import son3 from './Son3.vue'
  
  export default{
    name: 'father3',
    data: function(){
      return {
        fathermsg3: ''
      }
    },
     methods: {
       getDataFromSon3(){
         this.fathermsg3 = this.$refs.son3.son3msg
       }
     },
     components:{
       son3
     }
  }
</script>

<style>
</style>
