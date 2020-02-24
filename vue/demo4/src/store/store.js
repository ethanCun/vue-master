import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//状态管理: 用于在不相关的组件间传递信息
//1, 数据持久化
//2, 共有方法
const store = new Vuex.Store({

  state:{

    count: 1 //状态, 就是类似data
  },
  mutations:{

    //一些方法, 类似methods, 注意第一个参数是state, 第二个参数是传过来的数据
    storeMsg(state, msg){
      
      console.log('state: ', JSON.stringify(state))
      alert('msg: ' + msg)
    }
  }
})

export default store;
