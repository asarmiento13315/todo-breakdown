import React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/Button'

import pendingStepIcon from 'images/checkbox-blank-outline.png'
import doneStepIcon from 'images/checkbox-marked-outline.png'
import deleteIcon from 'images/outline_delete_black_18dp.png'

import Styled from './styles'

export default function TaskStep({ step, onSwitch, onRemove }) {
  return (
    <Styled.Container>
      <Button
        onClick={onSwitch}
        imgSrc={!step.done ? pendingStepIcon : doneStepIcon}
        fullWidth
        marked={step.done}
      >
        <div style={{ marginLeft: 10 }}>{step.title}</div>
      </Button>
      <Button onClick={onRemove} imgSrc={deleteIcon} />
    </Styled.Container>
  )
}

TaskStep.propTypes = {
  step: PropTypes.shape({
    title: PropTypes.string.isRequired,
    done:  PropTypes.bool.isRequired,
  }).isRequired,
  onSwitch: PropTypes.func,
  onRemove: PropTypes.func,
}

TaskStep.defaultProps = {
  onSwitch() {},
  onRemove() {},
}
