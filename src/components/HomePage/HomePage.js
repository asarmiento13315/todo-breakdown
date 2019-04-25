import React from 'react'

import TaskForm from 'containers/TaskForm'
import ToDoTaskList from 'containers/ToDoTaskList'
import TopBar from 'components/TopBar'

import Styled from './styles'

export default function HomePage() {
  return (
    <Styled.Layout>
      <div className={'top-section'}>
        <TopBar />
        <TaskForm />
      </div>
      <ToDoTaskList />
    </Styled.Layout>
  )
}
