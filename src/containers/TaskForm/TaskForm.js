import React from 'react'
import PropTypes from 'prop-types'
import LabeledInput from 'components/LabeledInput'
import useInputForm from 'components/custom-hooks/input-form.hook'

function TaskForm({ addTask }) {
  const newTask = useInputForm('')

  const handleNewTask = (event) => {
    event.preventDefault()
    if (newTask.value !== '') {
      addTask(newTask.value)
      newTask.value = ''
    }
  }
  return (
    <div style={{ width: '100%' }}>
      <form style={{ width: '100%' }} onSubmit={handleNewTask}>
        <LabeledInput placeholder={'New Task...'} {...newTask} />
      </form>
    </div>
  )
}

TaskForm.propTypes = {
  /** Action for Adding New To-Do Task */
  addTask: PropTypes.func,
}

TaskForm.defaultProps = {
  addTask() {},
}

export default TaskForm
