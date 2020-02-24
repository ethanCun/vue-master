<template>

  <div>
    演示父组件调用子组件方法：{{son4msg}}
    <input type="button" value="点击触发父组件调用子组件方法" @click="click" />

    <!-- ref 被用来给DOM元素或子组件注册引用信息, 引用信息会根据父组件的 $refs 对象进行注册。 -->
    <!-- 注意是ref，不是refs，也不是$refs -->
    <son4 ref="son4"></son4>

    <!-- 普通的通过ref引用获取dom元素信息 -->
    <p ref="pp" style="background: green; color: red;">pppppp</p>
  </div>
</template>

<script>
import son4 from './Son4.vue'

export default {
  name: 'father4',
  data () {
    return {
      son4msg: ''
    }
  },
  methods: {
    click () {
      // 获取普通dom元素信息
      console.log('backgroundColor: ' + this.$refs.pp.style.backgroundColor + ' color: ' + this.$refs.pp.style.color)

      // 获取组件信息
      this.$refs.son4.son4Method()
    }
  },
  components: {
    son4
  }
}
</script>

<style>
</style>
