import * as actionTypes from './actionTypes'

export function listTodos() {
  return {
    type: actionTypes.LIST_TODOS,
  }
}

export function listTodosSuccess(payload) {
  return {
    type: actionTypes.LIST_TODOS_SUCCESS,
    payload
  }
}

export function listTodosFailure() {
  return {
    type: actionTypes.LIST_TODOS_FAILURE,
  }
}


export function addTodo(data) {
  return {
    type: actionTypes.CREATE_TODO,
    payload: data
  }
}

export function addTodoSuccess(data) {
  return {
    type: actionTypes.CREATE_TODO_SUCCESS,
    payload: data
  }
}

export function addTodoFailure() {
  return {
    type: actionTypes.CREATE_TODO_FAILURE
  }
}

export function toggleStatus(id) {
  return {
    type: actionTypes.TOGGLE_STATUS_TODO,
    payload: id
  }
}

export function showVisible(type) {
  return {
    type: actionTypes.SHOW_VISIBLE,
    payload: type
  }
}
