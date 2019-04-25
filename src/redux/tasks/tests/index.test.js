import {
  fetchStages,
} from '..'

import {
  FETCH_STAGES,
} from '../constants'

describe('Tasks actions', () => {
  describe('fetchStages', () => {
    it('has a type of FETCH_STAGES', () => {
      expect(fetchStages().type).toEqual(FETCH_STAGES)
    })
  })
})
