
export default class InMemTasksService {
  getList = () => {
    const state = this.loadStateFromStorage()
    if (!state.tasks) {
      state.tasks = sampleTaskList
        .map((taskData) => ({ id: this.getTaskId(state), ...taskData }))
        .reduce((r, t) => Object.assign(r, { [t.id]: t }), {})
      this.saveStateToStorage(state)
    }
    return delayedResponse(Object.values(state.tasks))
  }

  upsertTask = (task) => {
    if (!task) return delayedResponseWithErrors(null)
    const state = this.loadStateFromStorage()
    if (!task.id) {
      task.id = this.getTaskId(state) // eslint-disable-line no-param-reassign
    }
    state.tasks = {
      ...state.tasks || {},
      [task.id]: task,
    }
    this.saveStateToStorage(state)
    return delayedResponse(task.id)
  }

  deleteTask = (taskId) => {
    const state = this.loadStateFromStorage()
    if (!(state.tasks || {})[taskId]) return delayedResponseWithErrors(null)
    delete state.tasks[taskId]
    this.saveStateToStorage(state)
    return delayedResponse(taskId)
  }

  // eslint-disable-next-line no-param-reassign
  getTaskId = (state) => state.nextTaskId++ // eslint-disable-line no-plusplus

  loadStateFromStorage = () => {
    let state
    try {
      state = JSON.parse(localStorage.getItem(STATE_STORAGE_KEY))
    } catch (e) { /* ignored */ }
    return state || { tasks: null, nextTaskId: 1 }
  }

  saveStateToStorage = (state) => {
    localStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(state))
  }
}

const STATE_STORAGE_KEY = 'STATE_STORAGE_KEY'

const DEF_RESP_DELAY = 100

const delayedResponse = (data) => new Promise((resolve) => {
  setTimeout(() => resolve({ ok: true, data }), DEF_RESP_DELAY)
})
// eslint-disable-next-line
const delayedResponseWithErrors = (errors) => new Promise((resolve) => {
  setTimeout(() => resolve({ ok: false, errors }), DEF_RESP_DELAY)
})


const sampleTaskList = [{
  title: 'Hacer el Cake',
  steps: [{
    title: 'Batir los huevos',
    done:  false,
  }, {
    title: 'Agregar la harina',
    done:  false,
  }, {
    title: 'Hornear por 30 min',
    done:  false,
  }],
}, {
  title: 'Realizar trabajo de curso',
  steps: [{
    title: 'Reunir referencias bibliograficas',
    done:  false,
  }, {
    title: 'Redactar el ensayo',
    done:  false,
  }, {
    title: 'Componer la presentacion',
    done:  false,
  }, {
    title: 'Enviar trabajo al profesor',
    done:  false,
  }],
}, {
  title: 'Preparar fiesta de cumple de Pepe',
  steps: [{
    title: 'Comprar lagers',
    done:  false,
  }, {
    title: 'Comprar whiskies',
    done:  false,
  }, {
    title: 'Comprar dulces',
    done:  false,
  }, {
    title: 'Arreglar sala para la sorpresa',
    done:  false,
  }],
}]
