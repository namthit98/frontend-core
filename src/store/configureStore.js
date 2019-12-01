import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga';
import rootReducer from './index'
import rootSaga from '../sagas/index';
const logger = createLogger({
  duration: true,
  collapsed: true
})

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware]
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger)
  }
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers =
    process.env.NODE_ENV !== 'production'
      ? composeWithDevTools(...enhancers)
      : compose(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)
  sagaMiddleware.run(rootSaga)

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  return store
}
