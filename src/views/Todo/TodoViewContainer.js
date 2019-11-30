import { connect } from 'react-redux'
import { addTodo, toggleStatus, showVisible } from '../../store/actions/todo.action'
import { createStructuredSelector } from 'reselect'
import { makeGetVisibleTodos } from '../../store/selectors/todo.selector'
import { TodoView } from './TodoView'

const mapStateToProps = createStructuredSelector({
  todos: makeGetVisibleTodos(),
})

export default connect(mapStateToProps, { addTodo, toggleStatus, showVisible })(TodoView)
