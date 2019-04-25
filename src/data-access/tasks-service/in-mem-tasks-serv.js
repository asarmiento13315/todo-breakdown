
export default class InMemTasksService {
  getList = (restoreSamples) => {
    const state = !restoreSamples
      ? this.loadStateFromStorage()
      : { tasks: null, nextTaskId: 1 }
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
  title: 'Make the Cake',
  steps: [{
    title: 'Beat the eggs',
    done:  false,
  }, {
    title: ' Add the flour ',
    done:  false,
  }, {
    title: ' Bake for 30 min ',
    done:  false,
  }],
}, {
  title: ' Do course work ',
  steps: [{
    title: ' Gather bibliographical references ',
    done:  false,
  }, {
    title: ' Write the essay ',
    done:  false,
  }, {
    title: ' Compose the presentation ',
    done:  false,
  }, {
    title: ' Send work to the teacher ',
    done:  false,
  }],
}, {
  title: ' Prepare birthday party for Pepe ',
  steps: [{
    title: ' Buy lagers',
    done:  false,
  }, {
    title: 'Buy whiskeys',
    done:  false,
  }, {
    title: ' Buy sweets',
    done:  false,
  }, {
    title: 'Fix room for surprise',
    done:  false,
  }],
}]
