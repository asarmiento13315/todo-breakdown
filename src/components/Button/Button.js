import React from 'react'
import PropTypes from 'prop-types'

import Styled from './styles'

function Button({ onClick, imgSrc, children }) {
  return (
    <Styled.Button
      role={'button'}
      tabIndex={0}
      onClick={onClick}
      onKeyPress={onClick}
    >
      {
        imgSrc
          && <img alt={'task step'} width={'25px'} src={imgSrc} />
      }
      {children}
    </Styled.Button>
  )
}

Button.propTypes = {
  onClick:  PropTypes.func,
  imgSrc:   PropTypes.string,
  children: PropTypes.func,
}

Button.defaultProps = {
  onClick() {},
}

export default Button
