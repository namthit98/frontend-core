import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik';

import { TextField, Button, List, ListItem, ListItemText } from '@material-ui/core'
import { useStyles } from './styles';
import { addTodo } from '../../store/actions/todo.action';
import { makeSelectNotCompletedTodo } from './selectors';

export const Todo = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const notCompletedTodos = useSelector(makeSelectNotCompletedTodo())

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleAddTodo = () => {
    dispatch(addTodo({
      id: 1,
      text: 'NamHandsome'
    }))
  }

  return (
    <div className={classes.wrapper}>
      <TextField type="text" placeholder="Input todo here !!" />
      <br />
      <Button variant="contained" color="primary" onClick={handleAddTodo}>ADD</Button>

      <br />
      <br />
      <br />

      <List subheader={<li />}>
        {notCompletedTodos.map(todo => (
          <ListItem key={`item-${todo.id}`}>
            <ListItemText primary={todo.text} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}
