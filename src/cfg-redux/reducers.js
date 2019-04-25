/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from 'redux'

/**
 * Creates the main reducer with the dynamically injected ones
 */
/* eslint-disable global-require */
export default combineReducers({
  tasks: require('redux/tasks/reducer').reducer,
})
/* eslint-enable global-require */
