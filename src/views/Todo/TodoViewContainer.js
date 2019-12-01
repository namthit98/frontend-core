import { connect } from 'react-redux'
import {
  listTodos,
  createTodo,
  readTodo,
  updateTodo,
  deleteTodo,
} from '../../store/actions/todo.action'
import { createStructuredSelector } from 'reselect'
import { makeTodos, makeGetTodo } from '../../store/selectors/todo.selector'
import { TodoView } from './TodoView'

const mapStateToProps = createStructuredSelector({
  todos: makeTodos(),
  todo: makeGetTodo(),
})

export default connect(mapStateToProps, {
  listTodos,
  createTodo,
  readTodo,
  updateTodo,
  deleteTodo,
})(TodoView)
