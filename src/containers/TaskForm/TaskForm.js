import React from 'react'
import PropTypes from 'prop-types'
import LabeledInput from 'components/LabeledInput'
import Button from 'components/Button'
import useInputForm from 'components/custom-hooks/input-form.hook'

import restoreIcon from 'images/restore-clock.png'

function TaskForm({ addTask, restoreSampleTasks }) {
  const newTask = useInputForm('')

  const handleNewTask = (event) => {
    event.preventDefault()
    if (newTask.value !== '') {
      addTask(newTask.value)
      newTask.value = ''
    }
  }
  return (
    <div style={{ width: '100%', display: 'inline-flex', justifyContent: 'center' }}>
      <form style={{ width: '600px' }} onSubmit={handleNewTask}>
        <LabeledInput placeholder={'New Task...'} {...newTask} />
      </form>
      <Button onClick={restoreSampleTasks} imgSrc={restoreIcon} />
    </div>
  )
}

TaskForm.propTypes = {
  /** Actions */
  addTask:            PropTypes.func,
  restoreSampleTasks: PropTypes.func,
}

TaskForm.defaultProps = {
  addTask() {},
  restoreSampleTasks() {},
}

export default TaskForm
