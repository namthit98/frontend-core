import { all, fork } from 'redux-saga/effects'

import todoSaga from './todo.saga'

/**
 * rootSaga
 */
export default function* root() {
  yield all([fork(todoSaga)])
}
