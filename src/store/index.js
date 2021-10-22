import { createStore } from 'vuex'

export default createStore({
  state: {
    id : ''
  },
  mutations: {
    getBlogId:function (state,id){
      state.id = id
    }
  },
  actions: {
  },
  modules: {
  }
})
