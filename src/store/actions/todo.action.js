import * as actionTypes from './actionTypes';

// LIST TODO
export function listTodos() {
  return {
    type: actionTypes.LIST_TODOS,
  };
}

export function listTodosSuccess(payload) {
  return {
    type: actionTypes.LIST_TODOS_SUCCESS,
    payload,
  };
}

export function listTodosFailure() {
  return {
    type: actionTypes.LIST_TODOS_FAILURE,
  };
}

// CREATE TODO
export function createTodo(data) {
  return {
    type: actionTypes.CREATE_TODO,
    payload: data,
  };
}

export function createTodoSuccess(data) {
  return {
    type: actionTypes.CREATE_TODO_SUCCESS,
    payload: data,
  };
}

export function createTodoFailure() {
  return {
    type: actionTypes.CREATE_TODO_FAILURE,
  };
}

// READ TODO
export function readTodo(id) {
  return {
    type: actionTypes.READ_TODO,
    payload: id,
  };
}

export function readTodoSuccess(data) {
  return {
    type: actionTypes.READ_TODO_SUCCESS,
    payload: data,
  };
}

export function readTodoFailure() {
  return {
    type: actionTypes.READ_TODO_FAILURE,
  };
}

// UPDATE TODO
export function updateTodo(data) {
  return {
    type: actionTypes.UPDATE_TODO,
    payload: data,
  };
}

export function updateTodoSuccess(data) {
  return {
    type: actionTypes.UPDATE_TODO_SUCCESS,
    payload: data,
  };
}

export function updateTodoFailure() {
  return {
    type: actionTypes.UPDATE_TODO_FAILURE,
  };
}

// DELETE TODO
export function deleteTodo(data) {
  return {
    type: actionTypes.DELETE_TODO,
    payload: data,
  };
}

export function deleteTodoSuccess(data) {
  return {
    type: actionTypes.DELETE_TODO_SUCCESS,
    payload: data,
  };
}

export function deleteTodoFailure() {
  return {
    type: actionTypes.DELETE_TODO_FAILURE,
  };
}
