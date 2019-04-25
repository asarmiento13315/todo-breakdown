import { useState } from 'react'

export default function useInputForm(initialValue) {
  const [currValue, setValue] = useState(initialValue)
  const onChange = (e) => {
    e.preventDefault()
    setValue(e.target.value)
  }
  return {
    get value() {
      return currValue
    },
    set value(newV) {
      setValue(newV)
    },
    onChange,
  }
}
