/**
 * Tasks constants
 */
/* eslint-disable no-multi-spaces */
const PREFIX = 'TASKS'

export const FETCH_TASKS           = `${PREFIX}/FETCH_TASKS`
export const FETCH_TASKS_FULFILLED = `${PREFIX}/FETCH_TASKS_FULFILLED`

export const REMOVE_TASK           = `${PREFIX}/REMOVE_TASK`
export const REMOVE_TASK_FULFILLED = `${PREFIX}/REMOVE_TASK_FULFILLED`

export const ADD_NEW_TASK           = `${PREFIX}/ADD_NEW_TASK`
export const ADD_NEW_TASK_FULFILLED = `${PREFIX}/ADD_NEW_TASK_FULFILLED`

export const SWITCH_TASK_STEP           = `${PREFIX}/SWITCH_TASK_STEP`
export const SWITCH_TASK_STEP_FULFILLED = `${PREFIX}/SWITCH_TASK_STEP_FULFILLED`

export const ADD_TASK_STEP           = `${PREFIX}/ADD_TASK_STEP`
export const ADD_TASK_STEP_FULFILLED = `${PREFIX}/ADD_TASK_STEP_FULFILLED`

export const REMOVE_TASK_STEP           = `${PREFIX}/REMOVE_TASK_STEP`
export const REMOVE_TASK_STEP_FULFILLED = `${PREFIX}/REMOVE_TASK_STEP_FULFILLED`

export const RESET_STATE           = `${PREFIX}/RESET_STATE`


/* eslint-enable no-multi-spaces */

export const INITIAL_STATE = {
  list: [],
  aux:  'star',
}
