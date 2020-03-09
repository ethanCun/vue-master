import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

const store = new Vuex.Store({

  state:{
    activeTabName: 'components',
    tabs: []
  },
  mutations:{

    removeTab(state, tab){

      for (let i=0; i<this.state.tabs.length; i++) {
        let tabi = this.state.tabs[i]
        if(tabi.name === tab.name){
          this.state.tabs.splice(i, 1)
        }
      }
    },

    addTab(state, tab){
      let contain = false
      for(let i=0;i<this.state.tabs.length;i++){
        if(this.state.tabs[i].name === tab.name){
          contain = true
        }
      }
      if(!contain){
        this.state.tabs.push(tab)
      }
    }
  },
  plugins:[createPersistedState({
    store: window.localStorage
  })]
})

export default store;
