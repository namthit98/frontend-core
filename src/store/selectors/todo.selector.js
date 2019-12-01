import { createSelector } from 'reselect'

const getVisibilityFilter = (state, props) => state.todoReducer.visibilityFilter

const getTodos = (state, props) => state.todoReducer.todos

const getTodo = (state, props) => state.todoReducer.todo

export const makeGetVisibleTodos = () => {
  return createSelector([getVisibilityFilter, getTodos], (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case 'SHOW_COMPLETED':
        return todos.filter(todo => todo.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(todo => !todo.completed)
      default:
        return todos
    }
  })
}

export const makeGetTodo = () => {
  return createSelector([getTodo], todo => todo)
}
