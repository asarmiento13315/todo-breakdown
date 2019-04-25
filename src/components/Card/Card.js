import React from 'react'
import PropTypes from 'prop-types'

import Styled from './styles'

function Card({ children }) {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  )
}


Card.propTypes = {
  children: PropTypes.any,
}

export default Card
