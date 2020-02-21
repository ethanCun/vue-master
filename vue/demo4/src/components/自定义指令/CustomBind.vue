<template>

  <div>

    自定义指令演示自动聚焦:<br />
    未添加自定义指令的input: <input type="text" v-red/><br />
    添加自定义指令的input: <input type="text" v-focus/>
  </div>
</template>

<script>

import Vue from 'vue'

// 全局定义指令 名称前面不带v-  通过v-red调用自定义好的指令 不推荐全局 因为directive名称可能重复
Vue.directive('red', {

  bind: function (el) {

  },

  inserted: function (el) {
    el.style.color = 'red'
  },

  update: function (el) {

  }
})

export default {

  name: 'CustomBind',
  data: function () {
    return {}
  },
  directives: {

    // 自定义私有指令
    focus: {

      // 指定对象的钩子函数
      // bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
      // inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
      // update：所在组件的 VNode 更新时调用，
      // el: 为使用了该自定义指令的dom元素
      bind: function (el) {

        // 这个时候在内存中做了初始化, 并没有挂载到dom中，因此做可视化操作是无效的
      },

      // 这个时候由内存中挂载到了dom中
      inserted: function (el) {
        
        el.focus()
        el.style.color = 'red'
      },

      update: function (el) {

      }
    }
  }
}
</script>

<style>
</style>
