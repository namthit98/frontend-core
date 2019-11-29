import { createSelector } from 'reselect';

export const selectTodoReducer = (state) => state.todoReducer;

export const makeSelectNotCompletedTodo = () => createSelector(
  selectTodoReducer,
  (todoState) => todoState.todos.filter(todo => !todo.completed)
);
