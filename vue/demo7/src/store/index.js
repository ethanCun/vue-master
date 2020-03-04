import vue from 'vue'
import vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

vue.use(vuex);

const store = new vuex.Store({

  //默认刷新后vuex state中的数据会丢失
  state: {
    activeIdx: []
  },
  mutations: {
    update_activeIdx(state, payload) {
      state.activeIdx = payload
    },
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })],
})

export default store;
