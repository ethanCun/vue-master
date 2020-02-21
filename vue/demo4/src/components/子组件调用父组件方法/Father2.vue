<template>

  <div>
    演示子组件调用父组件方法：
    <!-- @约定的方法名=”父组件methods中的方法名“ 在子组件中通过this.$emit(约定的方法名触发)-->
    <son @callFather="fatherMethod"></son>
  </div>
</template>

<script>

import son from './Son2.vue'

export default{
  name: 'Father2',
  data () {
    return {}
  },
  methods: {
    fatherMethod: function () {
      alert('调用了父组件的方法')
    }
  },
  components: {
    son
  }
}
</script>

<style>
</style>
