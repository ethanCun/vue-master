<template>
  <div>
    <div class="header">
      <router-view></router-view>
    </div>

    <div class="container">
      <First class="first"></First>
      <Second class="second"></Second>
    </div>

  </div>
</template>

<script>
import First from './First.vue'
import Second from './second.vue'

export default {
  name: 'Home',
  data () {
    return {
      msg: '这是首页'
    }
  },
  components: {
    First,
    Second
  }
}
</script>

<style>
  .header {
    background: green;
    height: 50px;
  }

  .container {

    height: 600px;
    display: flex;
    flex-direction: row;
  }

  .first {
    flex: 1;
    background: yellow;
  }

  .second {
    flex: 5;
    background: red;
  }

  body,
  html {
    margin: 0;
    padding: 0;
  }
</style>
