<template>

  <div>
    <input v-model="msg" />
    <p>观察input变化: {{inputChangeMsg}}</p>

    <div>
      <router-link to="/watch/child1">to child1</router-link>
      <router-link to="/watch/child2">to child2</router-link>

      <router-view></router-view>

      <p>观察$router的变化:{{routerChangeMsg}}</p>

    </div>

  </div>
</template>

<script>
export default {
  name: 'watch',
  data () {
    return {
      msg: '',
      inputChangeMsg: '',
      routerChangeMsg: ''
    }
  },
  watch: {

    msg: function (newVal, oldVal) {
      this.changeMsg = 'msg, new: ' + newVal + ' old: ' + oldVal
    },

    // 当被观察的对象名称中有-， 或者是观察对象.属性时，需要用引号括起来
    '$route.path': function (newVal, oldVal) {
      this.routerChangeMsg = 'router, new: ' + newVal + ' oldVal: ' + oldVal
    }
  }
}
</script>

<style>
</style>
