import React from 'react'

import Styled from './styles'

export default function TopBar() {
  return (
    <Styled.Container>
      <Styled.Content>
        <div>
          <img alt={'logo'} width={'80px'} src={'https://i.imgur.com/2Dhqpzt.png'} />
        </div>
        <div>
          <h2>To-Do Tasks Breaker</h2>
        </div>
      </Styled.Content>
    </Styled.Container>
  )
}

TopBar.propTypes = {
}
