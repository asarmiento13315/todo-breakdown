const logger = (store) => (next) => (action) => {
  console.group(action.type)  // eslint-disable-line
  console.info('dispatching', action)  // eslint-disable-line
  const result = next(action)
  console.log('next state', store.getState())  // eslint-disable-line
  console.groupEnd()  // eslint-disable-line
  return result
}

export default logger
