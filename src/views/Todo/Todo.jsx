import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { TextField, Button, List, ListItem, ListItemText } from '@material-ui/core'
import { useStyles } from './styles'
import { addTodo, toggleStatus } from '../../store/actions/todo.action'
import { makeSelectNotCompletedTodo, makeSelectCompletedTodo } from './selectors'
import { todoSchema } from './validation'

export const Todo = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const notCompletedTodos = useSelector(makeSelectNotCompletedTodo())
  const completedTodos = useSelector(makeSelectCompletedTodo())

  const {
    handleSubmit,
    handleChange,
    values: formikValues,
    errors: formikErrors,
    touched: formikTouched,
  } = useFormik({
    initialValues: {
      title: '',
    },
    validationSchema: todoSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(
        addTodo({
          id: Math.floor(Math.random() * 100),
          text: values.title,
        }),
      )
      resetForm()
    },
  })

  const handleToggleStatus = id => {
    dispatch(toggleStatus(id))
  }

  return (
    <div className={classes.wrapper}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          name="title"
          label="Title"
          onChange={handleChange}
          value={formikValues.title}
          type="text"
          placeholder="Input todo here !!"
          fullWidth
          error={formikErrors.title && formikTouched.title}
          helperText={
            formikErrors.title && formikTouched.title ? formikErrors.title : null
          }
        />
      </form>
      <br />
      <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
        ADD
      </Button>

      <br />
      <br />
      <br />

      <List subheader={<li />}>
        {notCompletedTodos.map(todo => (
          <ListItem onClick={() => handleToggleStatus(todo.id)} key={`item-${todo.id}`}>
            <ListItemText primary={todo.text} />
          </ListItem>
        ))}
      </List>

      <List subheader={<li />}>
        {completedTodos.map(todo => (
          <ListItem onClick={() => handleToggleStatus(todo.id)} key={`item-${todo.id}`}>
            <ListItemText primary={<s>{todo.text}</s>} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}
