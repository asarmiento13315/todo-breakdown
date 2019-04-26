import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const PresentationContext = React.createContext()

function PresentationProvider(props) {
  const [expandedTasks, setExpandedTasks] = useState({})

  function includeTask(taskId) {
    if (expandedTasks[taskId] === undefined) {
      setExpandedTasks((prevExpanded) => ({ ...prevExpanded, [taskId]: true }))
    }
  }

  function forgetTask(taskId) {
    if (expandedTasks[taskId] !== undefined) {
      setExpandedTasks(setExpandedTasks((prevExpanded) => {
        const { [taskId]: toForget, ...remainingTasks } = prevExpanded
        return remainingTasks
      }))
    }
  }

  function isExpanded(taskId) {
    return !!expandedTasks[taskId]
  }

  function expandTask(taskId) {
    setExpandedTasks((prevExpanded) => ({ ...prevExpanded, [taskId]: !prevExpanded[taskId] }))
  }

  function collapseAllTasks() {
    setExpandedTasks({})
  }

  return (
    <PresentationContext.Provider
      value={{
        includeTask,
        forgetTask,
        isExpanded,
        expandTask,
        collapseAllTasks,
      }}
    >
      {props.children}
    </PresentationContext.Provider>
  )
}

PresentationProvider.propTypes = {
  children: PropTypes.any,
}

PresentationProvider.defaultProps = {
}

export default PresentationProvider
