<template>

  <div class="computed">
    <input type="text" v-model="name" />
    <input type="text" v-model="age" />

    <p>使用计算属性computed观察属性变化: {{name}}, {{age}}, {{changeMsg}}</p>
  </div>
</template>

<script>
export default {
  name: 'computed',
  data () {
    return {
      name: '',
      age: ''
    }
  },
  computed: {

    // 观察set get
    // 注意： 观察属性不能再data中定义， 不然会报错
    // 写法1：
    changeMsg: function () {
      return this.name + '-' + this.age
    }

    // 写法2
    // changeMsg: {

    //   get: function (newVal) {
    //     return '姓名： ' + this.name + ' 年龄: ' + this.age
    //   },
    //   set: function (newVal) {
    //     console.log('name getter: ' + newVal)
    //   }
    // }
  }
}
</script>

<style>
</style>
