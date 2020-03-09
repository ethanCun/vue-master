<template>
    <div>
      <el-tabs closable="" v-model="$store.state.activeTabName" type="card" @tab-click="tabClick" @tab-remove="tabRemove">
        <el-tab-pane v-for="(item, index) in $store.state.tabs" :key="index" :label="item.name" :name="item.name">
          {{item.name}}, {{item.path}}
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>


  import store from '../../store/index.js'

  export default{
    name: 'tabs',
    data(){
      return {

      }
    },
    store,
    methods:{

      tabClick(e){

        this.$router.push({
          name:e.name
        })
      },

      tabRemove(e){

        //默认第一个标签不能删除
        if (e === 'components'){return}

        this.$store.commit('removeTab', {name: e, path: '/'+e})

        //删除之后显示最后一个
        if (this.$store.state.tabs && this.$store.state.tabs.length > 1){

          this.$store.state.activeTabName = this.$store.state.tabs[this.$store.state.tabs.length-1].name
          this.$router.push({
            name: this.$store.state.activeTabName
          })
        }else{

          this.$store.state.activeTabName = 'components'
          this.$router.push({
            name: 'components'
          })
        }
      }
    },
    watch:{

      '$route'(to){

        if(to.path === '/'){
          this.$store.commit('addTab', {name:'components', path:'/components'})
          this.$store.state.activeTabName = 'components'
          this.$router.push({
            name: 'components'
          })
        }else{
          this.$store.commit('addTab', {name:to.name, path:to.path})
        }

        this.$store.state.activeTabName = to.name
      }
    },
    mounted() {

      this.$router.push({
        name: this.$store.state.activeTabName
      })
    }
  }
</script>

<style>
</style>
