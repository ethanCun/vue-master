<template>
  <div class="fatherContainer">


    <!-- 引入子组件 并绑定子组件props的sonmsg为父组件的fathermsg -->
    <Son :sonmsg="fathermsg"></Son>
  </div>
</template>

<script>

import Son from './Son.vue'

export default{
  name: 'father',
  data () {
    return {
      fathermsg: '来自父组件的一条信息'
    }
  },
  components: {
    Son
  }
}
</script>

<style>
</style>
