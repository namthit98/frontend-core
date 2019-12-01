import { all, call, put, takeLatest, takeEvery } from 'redux-saga/effects'

import * as actionTypes from '../store/actions/actionTypes'
import TodoService from '../services/todo.service'
import { handleRequestErrorResponse } from '../lib/error-handler'

/**
 * Get Todos
 *
 * @param {Object} action
 *
 */
export function* getTodos() {
  try {
    const response = yield call(TodoService.listTodos)

    yield put({
      type: actionTypes.LIST_TODOS_SUCCESS,
      payload: response,
    })
  } catch (err) {
    yield put({
      type: actionTypes.LIST_TODOS_FAILURE,
    })
    handleRequestErrorResponse(err)
  }
}

/**
 * Create Todo
 *
 * @param {Object} action
 *
 */
export function* createTodo({ payload }) {
  try {
    const response = yield call(TodoService.createTodo, payload)

    yield put({
      type: actionTypes.CREATE_TODO_SUCCESS,
      payload: response,
    })
  } catch (err) {
    yield put({
      type: actionTypes.CREATE_TODO_FAILURE,
    })
    handleRequestErrorResponse(err)
  }
}

/**
 * Read Todo
 *
 * @param {Object} action
 *
 */
export function* readTodo({ payload }) {
  try {
    const response = yield call(TodoService.readTodo, payload)

    console.log(response)

    yield put({
      type: actionTypes.CREATE_TODO_SUCCESS,
      payload: response,
    })
  } catch (err) {
    yield put({
      type: actionTypes.CREATE_TODO_FAILURE,
    })
    handleRequestErrorResponse(err)
  }
}

/**
 * Todo Sagas
 */
export default function* todoSagas() {
  yield all([
    takeLatest(actionTypes.LIST_TODOS, getTodos),
    takeEvery(actionTypes.CREATE_TODO, createTodo),
  ])
}
