import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {
  listTodos,
  createTodo,
  readTodo,
  updateTodo,
  deleteTodo,
} from '../../store/actions/todo.action'
import { makeTodos, makeGetTodo } from '../../store/selectors/todo.selector'
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { useStyles } from './styles'
import { todoSchema } from '../../validations/todo.validation'

const TodoView = ({ todos, todo, createTodo, listTodos, readTodo, updateTodo, deleteTodo }) => {
  const classes = useStyles()
  const [counter, setCounter] = useState(0)

  const {
    handleSubmit,
    handleChange,
    setFieldValue,
    resetForm,
    values: formikValues,
    errors: formikErrors,
    touched: formikTouched,
  } = useFormik({
    initialValues: {
      text: '',
    },
    validationSchema: todoSchema,
    onSubmit: values => {
      if (todo) {
        updateTodo({
          id: todo.id,
          ...values,
        })
        return
      }

      createTodo({
        text: values.text,
        completed: false,
      }),
        resetForm()
    },
  })

  useEffect(() => {
    if (todo) {
      setFieldValue('text', todo.text)
    }
  }, [todo])

  return (
    <div className={classes.wrapper}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          name="text"
          label="Title"
          onChange={handleChange}
          value={formikValues.text}
          type="text"
          placeholder="Input todo here !!"
          fullWidth
          error={formikErrors.text && formikTouched.text}
          helperText={formikErrors.text && formikTouched.text ? formikErrors.text : null}
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

      <Button onClick={() => listTodos()}>FETCH</Button>

      {counter}

      <br />
      <br />
      <br />
      <List>
        {todos.map(todo => (
          <ListItem
            // onClick={() => handleToggleStatus(todo.id)}
            key={`item-${todo.id}`}
          >
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
    </div>
  )
}

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
