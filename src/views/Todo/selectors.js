import { createSelector } from 'reselect'

export const getTotos = state => state.todoReducer.todos

export const makeSelectNotCompletedTodo = () =>
  createSelector([getTotos], todos => todos.filter(todo => !todo.completed))

export const makeSelectCompletedTodo = () =>
  createSelector([getTotos], todos => todos.filter(todo => todo.completed))
