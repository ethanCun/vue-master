<template>

  <div>

    <p>获取count:::: {{$store.state.count}}</p>
    <p>111</p>
  </div>
</template>

<script>

  import store from '../../store/store.js'

  export default{
    name: 'GetCount',
    data(){
      return {

      }
    },
    store
  }
</script>

<style>
</style>
