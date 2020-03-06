<template>
  <div class="hello">

    <p>{{dateUtil.dateFormat('2020-2-4 18:50:48')}}</p>
    <p>{{dateUtil.dateFormat(1583376769000)}}</p>
    <p>{{dateUtil.dateFormat('Wed Mar 04 2020 18:54:13 GMT-0800 (北美太平洋标准时间)')}}</p>

    <p class="ttf">0000</p>

    <p v-loading.fullscreen.lock="loading">11212</p>

    <el-button class="el-icon.search" @click="showLoading">showLoading</el-button>
    <p>{{dateUtil.dateFormat('2020-2-4 18:50:48')}}</p>
    <p>{{dateUtil.dateFormat(1583376769000)}}</p>
    <p>{{dateUtil.dateFormat('Wed Mar 04 2020 18:54:13 GMT-0800 (北美太平洋标准时间)')}}</p>
    <p>{{dateUtil.dateFormat('2020-2-4 18:50:48')}}</p>
    <p>{{dateUtil.dateFormat(1583376769000)}}</p>
    <p>{{dateUtil.dateFormat('Wed Mar 04 2020 18:54:13 GMT-0800 (北美太平洋标准时间)')}}</p>
    <p>{{dateUtil.dateFormat('2020-2-4 18:50:48')}}</p>
    <p>{{dateUtil.dateFormat(1583376769000)}}</p>
    <p>{{dateUtil.dateFormat('Wed Mar 04 2020 18:54:13 GMT-0800 (北美太平洋标准时间)')}}</p>
    <p>{{dateUtil.dateFormat('2020-2-4 18:50:48')}}</p>
    <p>{{dateUtil.dateFormat(1583376769000)}}</p>
    <p>{{dateUtil.dateFormat('Wed Mar 04 2020 18:54:13 GMT-0800 (北美太平洋标准时间)')}}</p>
    <p>{{dateUtil.dateFormat('2020-2-4 18:50:48')}}</p>
    <p>{{dateUtil.dateFormat(1583376769000)}}</p>
    <p>{{dateUtil.dateFormat('Wed Mar 04 2020 18:54:13 GMT-0800 (北美太平洋标准时间)')}}</p>
    <p>{{dateUtil.dateFormat('2020-2-4 18:50:48')}}</p>
    <p>{{dateUtil.dateFormat(1583376769000)}}</p>
    <p>{{dateUtil.dateFormat('Wed Mar 04 2020 18:54:13 GMT-0800 (北美太平洋标准时间)')}}</p>
    <p>{{dateUtil.dateFormat('2020-2-4 18:50:48')}}</p>
    <p>{{dateUtil.dateFormat(1583376769000)}}</p>
    <p>{{dateUtil.dateFormat('Wed Mar 04 2020 18:54:13 GMT-0800 (北美太平洋标准时间)')}}</p>

  </div>
</template>

<script language="JavaScript1.9">
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      loading: false
    }
  },
  methods:{

    showLoading(){

      var self = this

      //注意箭头函数()=>{}和function(){}的区别
      this.loading = true
      // setTimeout(() => {

      //   this.loading = false
      //   console.log(this.loading);
      // }, 1000)

      setTimeout(function(){

        self.loading = false
        console.log(self.loading)
      }, 2000)
    }
  },
  mounted() {

    console.log('aaaa'.includes('aa'))
    console.log(2**3)
  }
}
</script>

<style>

.ttf{
  font-family: monaco;
}

</style>

