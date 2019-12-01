import { connect } from 'react-redux'
import {
  toggleStatus,
  showVisible,
  listTodos,
  createTodo,
  readTodo,
  updateTodo,
  deleteTodo
} from '../../store/actions/todo.action'
import { createStructuredSelector } from 'reselect'
import { makeGetVisibleTodos, makeGetTodo } from '../../store/selectors/todo.selector'
import { TodoView } from './TodoView'

const mapStateToProps = createStructuredSelector({
  todos: makeGetVisibleTodos(),
  todo: makeGetTodo(),
})

export default connect(mapStateToProps, {
  toggleStatus,
  showVisible,
  listTodos,
  createTodo,
  readTodo,
  updateTodo,
  deleteTodo
})(TodoView)
