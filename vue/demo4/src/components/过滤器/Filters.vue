<template>

  <div>

    <p>演示过滤器的使用:</p>
    <!-- 过滤器通过 | 调用 -->
    <form>
      <input type="text" v-model="msg" />
    </form>
    <span>拼接:{{msg | add('xx')}}</span>
    <span>字符串补全:{{msg | padStart}}</span>

    <span>拼接字符串补全:{{msg | add('yy') | padStart}}</span>
  </div>
</template>

<script>

// 引入Vue
import Vue from 'vue'

// 全局定义过滤器
Vue.filter('add', function (msg, arg) {
  return msg + arg
})

Vue.filter('padStart', function (msg) {
  return msg.padStart(5, '0')
})

export default{
  name: 'filters',
  data () {
    return {
      msg: ''
    }
  },
  filters: {

    // 自定义私有filters 第一个参数为text 第二个参数为括号里的参数
    // add (msg, arg) {
    //   return msg + arg
    // },

    // 字符串补全前面n个字符串 'x'.padStart(5, 'ab') // 'ababx' x'.padEnd(4, 'ab') // 'xaba'
    // padStart: function (msg) {
    //   return msg.padStart(5, '0')
    // }
  }
}
</script>

<style>
</style>
