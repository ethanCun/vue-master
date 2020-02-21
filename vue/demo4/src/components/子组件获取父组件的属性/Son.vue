<template>

  <div class="son">
    <!-- <p @click="getDataFromFather">点击子组件，获取父组件的属性为: {{sonInnerMsg}}</p> -->
    <!-- 直接使用props的数据 props：一般用来接收外部数据（公用） data：一般为私有数据，很可能是网络请求来的数据 -->
    <p>这是子组件的内容: {{sonmsg}}</p>
  </div>
</template>

<script>
export default{
  name: 'son',
  data () {
    return {
      sonInnerMsg: ''
    }
  },
  props: [
    'sonmsg'
  ],
  methods: {

    // getDataFromFather(){
    //   this.sonInnerMsg = son
    // }
  }
}
</script>

<style>
</style>
