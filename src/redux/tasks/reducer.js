import {
  FETCH_TASKS_FULFILLED,
  REMOVE_TASK_FULFILLED,
  ADD_NEW_TASK_FULFILLED,
  SWITCH_TASK_STEP_FULFILLED,
  ADD_TASK_STEP_FULFILLED,
  REMOVE_TASK_STEP_FULFILLED,
  RESET_STATE,
  INITIAL_STATE,
} from './constants'

/**
 * Merge Tasks into the global application state
 */
export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TASKS_FULFILLED:
      return { ...state, list: action.payload }

    case REMOVE_TASK_FULFILLED:
    {
      const taskId = action.payload
      const taskIndex = state.list.findIndex((t) => t.id === taskId)
      const updatedList = [...state.list] // change taskList ref
      updatedList.splice(taskIndex, 1)
      return { ...state, list: updatedList }
    }

    case ADD_NEW_TASK_FULFILLED:
    {
      const task = action.payload
      const updatedList = [...state.list, task] // change taskList ref
      return { ...state, list: updatedList }
    }

    case SWITCH_TASK_STEP_FULFILLED:
    {
      const { taskId, stepId, stepState } = action.payload
      const taskIndex = state.list.findIndex((t) => t.id === taskId)
      const task = state.list[taskIndex]
      task.steps[stepId] = { ...task.steps[stepId], done: stepState } // change step ref
      const updatedList = [...state.list] // change taskList ref
      updatedList[taskIndex] = { ...task } // change task ref
      return { ...state, list: updatedList }
    }

    case ADD_TASK_STEP_FULFILLED:
    {
      const { taskId, newStep } = action.payload
      const taskIndex = state.list.findIndex((t) => t.id === taskId)
      const task = state.list[taskIndex]
      task.steps.push(newStep)
      const updatedList = [...state.list] // change taskList ref
      updatedList[taskIndex] = { ...task } // change task ref
      return { ...state, list: updatedList }
    }

    case REMOVE_TASK_STEP_FULFILLED:
    {
      const { taskId, stepId } = action.payload
      const taskIndex = state.list.findIndex((t) => t.id === taskId)
      const task = state.list[taskIndex]
      const steps = [...task.steps]
      steps.splice(stepId, 1)
      const updatedList = [...state.list] // change taskList ref
      updatedList[taskIndex] = { ...task, steps } // change task ref
      return { ...state, list: updatedList }
    }

    case RESET_STATE:
      return INITIAL_STATE

    default:
      return state
  }
}
