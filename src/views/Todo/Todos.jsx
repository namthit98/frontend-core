import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  ListItem,
  List,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import { listTodos, readTodo, deleteTodo } from '../../store/actions/todo.action';
import { makeTodos } from '../../store/selectors/todo.selector';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export const Todos = ({ todos, listTodos, readTodo, deleteTodo }) => {
  useEffect(() => {
    listTodos();
  }, []);

  return (
    <List>
      {todos &&
        todos.map(todo => (
          <ListItem key={`item-${todo.id}`}>
            <ListItemText primary={todo.text} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit" onClick={() => readTodo(todo.id)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
    </List>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      completed: PropTypes.bool,
    }),
  ),
  listTodos: PropTypes.func,
  readTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  todos: makeTodos(),
});

export default connect(mapStateToProps, {
  listTodos,
  readTodo,
  deleteTodo,
})(Todos);
