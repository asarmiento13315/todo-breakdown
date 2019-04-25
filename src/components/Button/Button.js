import React from 'react'
import PropTypes from 'prop-types'

import Styled from './styles'

function Button({
  onClick, imgSrc, children, fullWidth, marked,
}) {
  return (
    <Styled.Button
      role={'button'}
      tabIndex={0}
      onClick={onClick}
      onKeyPress={onClick}
      fullWidth={fullWidth}
      marked={marked}
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
  onClick:   PropTypes.func,
  imgSrc:    PropTypes.string,
  fullWidth: PropTypes.bool,
  marked:    PropTypes.bool,
  children:  PropTypes.func,
}

Button.defaultProps = {
  onClick() {},
}

export default Button
