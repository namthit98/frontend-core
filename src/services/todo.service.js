import { BASE_URL } from '../constants';
import request from '../lib/request';

const URL = `${BASE_URL}/todos`;

const listTodos = () => request(URL, { method: 'GET' });

const createTodo = payload => request(URL, { method: 'POST', payload });

const readTodo = id => request(`${URL}/${id}`, { method: 'GET' });

const updateTodo = (id, payload) => request(`${URL}/${id}`, { method: 'PUT', payload });

const deleteTodo = id => request(`${URL}/${id}`, { method: 'DELETE' });

export default {
  listTodos,
  createTodo,
  readTodo,
  updateTodo,
  deleteTodo,
};
