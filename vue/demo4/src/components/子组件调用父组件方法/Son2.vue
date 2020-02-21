<template>
  
  <div>
    <input type="button" value="点击调用父组件方法" @click="callFather"/>
  </div>
</template>

<script>
  
  export default{
    name: 'son2',
    data(){
      return {
        
      }
    },
    methods:{
      callFather(){
        this.$emit('callFather')
      }
    }
  }
</script>

<style>
</style>
