import { createSelector } from 'reselect'

const getTodos = (state, props) => state.todoReducer.todos

const getTodo = (state, props) => state.todoReducer.todo

export const makeTodos = () => {
  return createSelector([getTodos], todos => todos)
}

export const makeGetTodo = () => {
  return createSelector([getTodo], todo => todo)
}
