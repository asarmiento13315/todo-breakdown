/**
 * TaskForm Redux connected component and export
 */

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  addTask,
  restoreSampleTasks,
} from 'redux/tasks'

import Component from './TaskForm'

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    addTask,
    restoreSampleTasks,
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Component)
