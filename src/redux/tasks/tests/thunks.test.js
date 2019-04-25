import {
  fetchStagesThunk,
} from '../thunks'

describe('Tasks thunks', () => {
  describe('fetchStagesThunk', () => {
    it.skip('resolves asynchronously', async () => {
      const response = await fetchStagesThunk()
      expect(response).toEqual('YAY!!')
    })
  })
})
