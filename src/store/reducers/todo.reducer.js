import produce from 'immer'
import * as actionTypes from '../actions/actionTypes'

const initialState = {
  todos: [],
  todo: null,
  visibilityFilter: 'ALL',
}

const todoReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actionTypes.LIST_TODOS_SUCCESS:
        draft.todos = action.payload
        break;
      case actionTypes.LIST_TODOS_FAILURE:
        break;

      case actionTypes.CREATE_TODO_SUCCESS:
        draft.todos.push(action.payload)
        break
      case actionTypes.CREATE_TODO_FAILURE:
        break;

      case actionTypes.READ_TODO_SUCCESS:
        draft.todo = action.payload
        break;
      case actionTypes.READ_TODO_FAILURE:
        break;

      case actionTypes.UPDATE_TODO_SUCCESS: {
        const idx = draft.todos.findIndex(todo => todo.id === action.payload.id)
        draft.todos[idx] = action.payload
        break;
      }
      case actionTypes.UPDATE_TODO_FAILURE:
        break;

      case actionTypes.DELETE_TODO_SUCCESS: {
        const idx = draft.todos.findIndex(todo => todo.id === action.payload.id)
        draft.todos.splice(idx, 1)
        break;
      }
      case actionTypes.DELETE_TODO_FAILURE: {
        break;
      }

      case 'TOGGLE_STATUS_TODO': {
        const idx = draft.todos.findIndex(todo => todo.id === action.payload)
        draft.todos[idx].completed = !draft.todos[idx].completed
        break
      }

      case 'SHOW_VISIBLE':
        draft.visibilityFilter = action.payload
    }
  })

export default todoReducer
