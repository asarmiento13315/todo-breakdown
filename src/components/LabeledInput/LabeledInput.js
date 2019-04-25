
import React from 'react'
import PropTypes from 'prop-types'

import Styled from './styles'

export default function LabeledInput({ value, onChange, placeholder }) {
  return (
    <Styled.Container>
      <label htmlFor={'inp'} className={'inp'}>
        <input type={'text'} id={'inp'} placeholder={' '} value={value} onChange={onChange} />
        <span className={'label'}>{placeholder}</span>
        <span className={'border'} />
      </label>
    </Styled.Container>
  )
}

LabeledInput.propTypes = {
  placeholder: PropTypes.string,
  value:       PropTypes.string,
  onChange:    PropTypes.func,
}

LabeledInput.defaultProps = {
  placeholder: 'value...',
  value:       '',
  onChange() {},
}
