import React, { useState } from 'react'
import { useFormik } from 'formik'
import { TextField, Button, List, ListItem, ListItemText } from '@material-ui/core'
import { useStyles } from './styles'
import { todoSchema } from '../../validations/todo.validation'

export const TodoView = ({ todos, addTodo, toggleStatus, showVisible, listTodos }) => {
  const classes = useStyles()
  const [counter, setCounter] = useState(0)

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
      addTodo({
        text: values.title,
        completed: false
      }),
        resetForm()
    },
  })

  const handleToggleStatus = id => {
    toggleStatus(id)
  }

  const handleShowVisible = type => {
    showVisible(type)
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
          helperText={formikErrors.title && formikTouched.title ? formikErrors.title : null}
        />
      </form>
      <br />
      <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
        ADD
      </Button>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => setCounter(counter + 1)}
      >
        Increase
      </Button>

      <p onClick={() => handleShowVisible('ALL')}>ALL</p>
      <p onClick={() => handleShowVisible('SHOW_COMPLETED')}>SHOW_COMPLETED</p>
      <p onClick={() => handleShowVisible('SHOW_ACTIVE')}>SHOW_ACTIVE</p>

      <Button onClick={() => listTodos()}>FETCH</Button>

      {counter}

      <br />
      <br />
      <br />
      <List>
        {todos.map(todo => (
          <ListItem onClick={() => handleToggleStatus(todo.id)} key={`item-${todo.id}`}>
            <ListItemText primary={todo.text} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}
