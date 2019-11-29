import * as actionTypes from './actionTypes'

export function addTodo(data) {
  return {
    type: actionTypes.ADD_TODO,
    payload: data
  }
}

export function toggleStatus(id) {
  return {
    type: actionTypes.TOGGLE_STATUS_TODO,
    payload: id
  }
}
