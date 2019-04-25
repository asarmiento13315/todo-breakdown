/**
 * ToDoTaskList Redux connected component and export
 */

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getProp from 'lodash/get'

import {
  fetchTaskList,
  removeTask,
  switchTaskStep,
  addTaskStep,
  removeTaskStep,
} from 'redux/tasks'

import Component from './ToDoTaskList'

const mapStateToProps = (state) => ({
  taskList: getProp(state, 'tasks.list', []),
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    fetchTaskList,
    removeTask,
    switchTaskStep,
    addTaskStep,
    removeTaskStep,
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Component)
