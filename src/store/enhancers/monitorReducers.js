import customLog from "../../lib/custom-console-log"

const round = number => Math.round(number * 100) / 100

const monitorReducerEnhancer = createStore => (reducer, initialState, enhancer) => {
  const monitoredReducer = (state, action) => {
    const start = performance.now()
    const newState = reducer(state, action)
    const end = performance.now()
    const diff = round(end - start)

    customLog('reducer process time: ' + diff + ' ms', diff < 100 ? 'success' : diff < 200 ? 'warning' : 'error')

    return newState
  }

  return createStore(monitoredReducer, initialState, enhancer)
}

export default monitorReducerEnhancer
