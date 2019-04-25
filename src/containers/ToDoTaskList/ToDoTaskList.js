import React from 'react'
import PropTypes from 'prop-types'

import TaskCard from 'components/TaskCard'
// import Styled from './styles'

class ToDoTaskList extends React.PureComponent {
  componentDidMount() {
    this.props.fetchTaskList()
  }

  render() {
    const {
      taskList, removeTask, switchTaskStep, addTaskStep, removeTaskStep,
    } = this.props
    return taskList
      .map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          removeTask={removeTask}
          switchTaskStep={switchTaskStep}
          addTaskStep={addTaskStep}
          removeTaskStep={removeTaskStep}
        />
      ))
  }
}

ToDoTaskList.propTypes = {
  /** The List of To-Do Tasks */
  taskList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
  /** Actions */
  fetchTaskList:  PropTypes.func,
  removeTask:     PropTypes.func,
  switchTaskStep: PropTypes.func,
  addTaskStep:    PropTypes.func,
  removeTaskStep: PropTypes.func,
}

ToDoTaskList.defaultProps = {
  fetchTaskList() {},
  removeTask() {},
  switchTaskStep() {},
  addTaskStep() {},
  removeTaskStep() {},
}

export default ToDoTaskList
