<template>

  <div>

    <!-- 打印vuex中的state -->
    <p>count:: {{$store.state.count}}</p>

    <input type="button" value="设置count" @click="setCount" />

    <input type="button" value="调用store的mutations" @click="callMutations" />
  </div>
</template>

<script>
import store from '../../store/store.js'

export default {
  name: 'Count',
  data () {
    return {

    }
  },
  store, // 引入
  methods: {

    setCount () {
      this.$store.state.count++

      console.log('count : ' + this.$store.state.count)
    },

    callMutations () {
      // 通过commit调用store, mutations中的方法
      // 第一个参数： mutations中被调用的方法名
      // 第二个参数： 传的数据
      this.$store.commit('storeMsg', JSON.stringify({
        name: 'zhangsan',
        age: 200
      }))
    }
  }
}
</script>

<style>
</style>
