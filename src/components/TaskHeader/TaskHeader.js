import React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/Button'

import deleteIcon from 'images/outline_delete_black_18dp.png'
import taskIcon from 'images/format-list-checks.png'

import Styled from './styles'

export default function TaskHeader({ task, onClick, onRemove }) {
  const handleTaskClick = () => onClick()
  const handleRemoveTask = (event) => {
    event.preventDefault()
    onRemove(task.id)
  }
  const totalSteps = task.steps.length
  const completedSteps = task.steps.filter((step) => step.done).length
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <Styled.Container
      role={'button'}
      onKeyPress={handleTaskClick}
      tabIndex={task.order}
      onClick={handleTaskClick}
    >
      <img
        alt={'Task Header'}
        src={taskIcon}
      />
      <div>{`${completedSteps}/${totalSteps}`}</div>
      <div>{task.title}</div>

      <Button onClick={handleRemoveTask} imgSrc={deleteIcon} />
    </Styled.Container>
  )
}

TaskHeader.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  onClick:  PropTypes.func,
  onRemove: PropTypes.func,
}

TaskHeader.defaultProps = {
  onClick() {},
  onRemove() {},
}
