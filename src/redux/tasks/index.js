import {
  FETCH_TASKS,
  REMOVE_TASK,
  ADD_NEW_TASK,
  SWITCH_TASK_STEP,
  ADD_TASK_STEP,
  REMOVE_TASK_STEP,
  RESET_STATE,
} from './constants'

import {
  fetchTaskListThunk,
  upsertTaskThunk,
  deleteTaskThunk,
} from './thunks'

/**
 *  Action to perform Fetching the List of Tasks
 */
export const fetchTaskList = () => (dispatch) => dispatch(
  {
    type:    FETCH_TASKS,
    payload: fetchTaskListThunk(),
  }
)

export const removeTask = (taskId) => (dispatch) => {
  dispatch(
    {
      type:    REMOVE_TASK,
      payload: deleteTaskThunk(taskId),
    }
  )
}

export const addTask = (taskTitle) => (dispatch) => {
  dispatch(
    {
      type:    ADD_NEW_TASK,
      payload: async () => {
        const newTask = { title: taskTitle, steps: [] }
        const taskId = await upsertTaskThunk(newTask)
        return {
          ...newTask,
          id: taskId,
        }
      },
    }
  )
}

export const restoreSampleTasks = () => (dispatch) => dispatch(
  {
    type:    FETCH_TASKS,
    payload: fetchTaskListThunk(true),
  }
)

export const switchTaskStep = (task, stepId) => (dispatch) => {
  dispatch(
    {
      type:    SWITCH_TASK_STEP,
      payload: async () => {
        const stepState = !task.steps[stepId].done
        task.steps[stepId].done = stepState // eslint-disable-line no-param-reassign
        await upsertTaskThunk(task)
        return {
          taskId: task.id,
          stepId,
          stepState,
        }
      },
    }
  )
}

export const addTaskStep = (task, stepTitle) => (dispatch) => {
  dispatch(
    {
      type:    ADD_TASK_STEP,
      payload: async () => {
        const newStep = { title: stepTitle, done: false }
        upsertTaskThunk({ ...task, steps: [...task.steps, newStep] })
        return {
          taskId: task.id,
          newStep,
        }
      },
    }
  )
}

export const removeTaskStep = (task, stepId) => (dispatch) => {
  dispatch(
    {
      type:    REMOVE_TASK_STEP,
      payload: async () => {
        const steps = [...task.steps]
        steps.splice(stepId, 1)
        upsertTaskThunk({ ...task, steps })
        return {
          taskId: task.id,
          stepId,
        }
      },
    }
  )
}

/**
 * Action to perform Reseting of Tasks State
 */
export const resetState = () => (
  {
    type: RESET_STATE,
  }
)
