import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'

import LabeledInput from 'components/LabeledInput'
import useInputForm from 'components/custom-hooks/input-form.hook'
import TaskHeader from 'components/TaskHeader'
import StepList from 'components/StepList'

import { PresentationContext } from 'components/contexts/PresentationContext'

import Styled from './styles'

function TaskCard({
  task, removeTask, switchTaskStep, addTaskStep, removeTaskStep,
}) {
  const presentation = useContext(PresentationContext)
  const newStep = useInputForm('')

  useEffect(() => {
    presentation.includeTask(task.id)
    return () => presentation.forgetTask(task.id)
  }, task.id)

  const switchExpanded = () => presentation.expandTask(task.id)

  const expanded = presentation.isExpanded(task.id)

  const handleNewTaskStep = (event) => {
    event.preventDefault()
    if (newStep.value !== '') {
      addTaskStep(task, newStep.value)
      newStep.value = ''
    }
  }

  const totalSteps = task.steps.length
  const completedSteps = task.steps.filter((step) => step.done).length
  const progress = `${completedSteps}/${totalSteps}`
  const completed = totalSteps === completedSteps

  return (
    <Styled.Container completed={completed}>
      <TaskHeader task={task} progress={progress} onClick={switchExpanded} onRemove={removeTask} />
      <Styled.TaskContent expanded={expanded}>
        <StepList task={task} switchTaskStep={switchTaskStep} removeTaskStep={removeTaskStep} />
        <Styled.Form expanded={expanded} onSubmit={handleNewTaskStep}>
          <LabeledInput placeholder={'New Step...'} {...newStep} />
        </Styled.Form>
      </Styled.TaskContent>
    </Styled.Container>
  )
}

TaskCard.propTypes = {
  /** The To-Do Task */
  task: PropTypes.shape({
    id:    PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    steps: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
    })),
    order: PropTypes.number,
  }),
  /** Actions */
  removeTask:     PropTypes.func,
  switchTaskStep: PropTypes.func,
  addTaskStep:    PropTypes.func,
  removeTaskStep: PropTypes.func,
}

TaskCard.defaultProps = {
  removeTask() {},
  switchTaskStep() {},
  addTaskStep() {},
  removeTaskStep() {},
}

export default TaskCard
