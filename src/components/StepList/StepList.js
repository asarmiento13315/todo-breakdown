import React from 'react'
import PropTypes from 'prop-types'
import TaskStep from 'components/TaskStep'

import Styled from './styles'

function StepList({ task, switchTaskStep, removeTaskStep }) {
  const handleSwitchStep = (stepId) => () => switchTaskStep(task, stepId)
  const handleRemoveStep = (stepId) => () => removeTaskStep(task, stepId)

  return (
    <Styled.Container>
      {task.steps
        .map((step, stepId) => (
          <TaskStep
            key={stepId} // eslint-disable-line react/no-array-index-key
            step={step}
            onSwitch={handleSwitchStep(stepId)}
            onRemove={handleRemoveStep(stepId)}
          />
        ))}
    </Styled.Container>
  )
}

StepList.propTypes = {
  task:           PropTypes.object,
  switchTaskStep: PropTypes.func,
  removeTaskStep: PropTypes.func,
}

StepList.defaultProps = {
  switchTaskStep() {},
  removeTaskStep() {},
}

export default StepList
