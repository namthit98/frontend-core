import { all, call, put, takeLatest, takeEvery } from 'redux-saga/effects'

import * as actionTypes from '../store/actions/actionTypes'
import TodoService from '../services/todo.service'
import { handleRequestErrorResponse } from '../lib/error-handler'
import {
  createTodoSuccess,
  createTodoFailure,
  listTodosSuccess,
  listTodosFailure,
  readTodoSuccess,
  readTodoFailure,
  updateTodoSuccess,
  updateTodoFailure,
  deleteTodoSuccess,
  deleteTodoFailure,
} from '../store/actions/todo.action'

/**
 * Get Todos
 *
 * @param {Object} action
 *
 */
export function* getTodos() {
  try {
    const response = yield call(TodoService.listTodos)

    yield put(listTodosSuccess(response))
  } catch (err) {
    yield put(listTodosFailure())
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

    yield put(createTodoSuccess(response))
  } catch (err) {
    yield put(createTodoFailure())
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

    yield put(readTodoSuccess(response))
  } catch (err) {
    yield put(readTodoFailure())
    handleRequestErrorResponse(err)
  }
}

/**
 * Update Todo
 *
 * @param {Object} action
 *
 */
export function* updateTodo({ payload }) {
  try {
    const response = yield call(TodoService.updateTodo, payload.id, payload)

    yield put(updateTodoSuccess(response))
  } catch (err) {
    yield put(updateTodoFailure())
    handleRequestErrorResponse(err)
  }
}

/**
 * Delete Todo
 *
 * @param {Object} action
 *
 */
export function* deleteTodo({ payload }) {
  try {
    const response = yield call(TodoService.deleteTodo, payload)

    yield put(deleteTodoSuccess(response))
  } catch (err) {
    yield put(deleteTodoFailure())
    handleRequestErrorResponse(err)
  }
}

/**
 * Todo Saga
 */
export default function* todoSaga() {
  yield all([
    takeLatest(actionTypes.LIST_TODOS, getTodos),
    takeEvery(actionTypes.CREATE_TODO, createTodo),
    takeLatest(actionTypes.READ_TODO, readTodo),
    takeEvery(actionTypes.UPDATE_TODO, updateTodo),
    takeEvery(actionTypes.DELETE_TODO, deleteTodo),
  ])
}
