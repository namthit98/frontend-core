import { all, fork } from 'redux-saga/effects'

import todoSagas from './todo.saga'


/**
 * rootSaga
 */
export default function* root() {
  yield all([fork(todoSagas)])
}
