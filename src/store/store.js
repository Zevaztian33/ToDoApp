import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    task: [],
  },
  getters: {
    new_Task(state){
      return state.task
    }
  },
  mutations: {
    mutTask(state, newTask){
      state.task.push(newTask)
    },
    mutDeleteTask(state, index){
      state.task.splice(index, 1)
    }
  },
  actions: {
    addTask({commit}, newTask){
      commit('mutTask', newTask)
    },
    deleteThisTask({commit}, index){
      commit('mutDeleteTask', index)
    }
  }
})
