import * as actionTypes from './actionTypes'

export function addTodo(data) {
  return {
    type: actionTypes.ADD_TODO,
    payload: data
  }
}
