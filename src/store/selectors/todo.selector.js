import { createSelector } from 'reselect';

const getTodos = state => state.todoReducer.todos;

const getTodo = state => state.todoReducer.todo;

export const makeTodos = () => {
  return createSelector([getTodos], todos => todos);
};

export const makeGetTodo = () => {
  return createSelector([getTodo], todo => todo);
};
