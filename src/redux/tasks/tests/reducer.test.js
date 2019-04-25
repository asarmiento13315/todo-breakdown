import { fromJS } from 'immutable'
import { reducer } from '../reducer'

import {
  // FETCH_STAGES_FULFILLED,
  INITIAL_STATE,
} from '../constants'

describe('tasks reducer', () => {
  // let result
  beforeEach(() => {
    // result = null
  })

  it('returns the initial state', () => {
    expect(reducer(undefined, {}).toJS()).toEqual(INITIAL_STATE)
  })
})

describe('Test inmutable', () => {
  let obj
  let arr
  let result
  beforeEach(() => {
    result = null
    obj = {
      a: ['a', 'b'],
    }
    arr = [
      { a: 0 },
      { b: ['a'] },
    ]
  })

  it('Testing change deep array', () => {
    result = fromJS(obj).setIn(['a', 0], 'z').setIn(['a', 1], 'z')
    obj.a[0] = 'z'
    obj.a[1] = 'z'
    expect(obj).toEqual(result.toJS())
  })

  it('Testing change objects inside array', () => {
    result = fromJS(arr).setIn([0, 'a'], 1).setIn([1, 'b', 0], 'aa')
    arr[0].a = 1
    arr[1].b[0] = 'aa'
    expect(arr).toEqual(result.toJS())
  })
})
