import React, { useContext } from 'react'

import TopBar from 'components/TopBar'
import TaskForm from 'containers/TaskForm'
import Button from 'components/Button'
import ToDoTaskList from 'containers/ToDoTaskList'

import PresentationProvider, { PresentationContext } from 'components/contexts/PresentationContext'

import collapseAllIcon from 'images/collapse-all-outline.png'

import Styled from './styles'

function HomePage() {
  const presentation = useContext(PresentationContext)

  const collapseAll = () => presentation.collapseAllTasks()

  return (
    <Styled.Layout>
      <div className={'top-section'}>
        <TopBar />
        <div
          style={{
            maxWidth:   '640px',
            display:    'flex',
            alignItems: 'center',
            margin:     'auto',
          }}
        >
          <TaskForm />
          <div className={'card-actions'}>
            <Button onClick={collapseAll} imgSrc={collapseAllIcon} />
          </div>
        </div>
      </div>
      <ToDoTaskList />
    </Styled.Layout>
  )
}

export default function PresentedHomePage() {
  return (
    <PresentationProvider>
      <HomePage />
    </PresentationProvider>
  )
}
