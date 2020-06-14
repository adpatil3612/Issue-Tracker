import Vue from 'vue'
import { uid } from 'quasar'

const state = {
  tasks: {
    ' 9e87ad0b-d675-4fdb-8f63-ca1464ccb6bb': {
      summary: 'Login Failing',
      severity: 'High',
      due_date: '2020/06/09',
      assignedTo: 'Adarsh',
      status: 'In Progress',
      desription: 'Getting an error 403 from the API'
    },
    '29672b43-4ad4-494f-aa5e-65454b7d6ddf': {
      summary: 'Data migration issue',
      severity: 'Medium',
      due_date: '2020/06/12',
      assignedTo: 'Akshay',
      status: 'In Progress',
      desription: 'Partial Data Migrated'
    }
  }
}

const mutations = {
  /**
   * Update the status of the issue
   * @param {Get the state of tasks} state
   * @param {Contains the attribute status which is to be updated } payload
   */
  updateTask (state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  /**
   * Delete the issue from the existing list
   * @param {Get the state of tasks} state
   * @param {Contains the attribute id which is to be deleted } id
   */
  deleteTask (state, id) {
    Vue.delete(state.tasks, id)
  },
  /**
   * Add the issue to the existing list
   * @param {Get the state of tasks} state
   * @param {Contains the data which is to be added to the list} payload
   */
  addTask (state, payload) {
    Vue.set(state.tasks, payload.id, payload.task)
  }
}

const actions = {
  updateTask ({ commit }, payload) {
    console.log('Update Task Action', payload)
    commit('updateTask', payload)
  },
  deleteTask ({ commit }, id) {
    console.log('Delete Task Action', id)
    commit('deleteTask', id)
  },
  addTask ({ commit }, task) {
    const taskId = uid()
    const payload = {
      id: taskId,
      task: task
    }
    console.log('Add Task Action', payload)
    commit('addTask', payload)
  }
}

const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
