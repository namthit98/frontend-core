const initialState = {
  todos: [],
  visibilityFilter: "ALL"
}

function todoReducer(todoState = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return addTodo(todoState, action)
    case 'TOGGLE_STATUS_TODO':
      return toggleStatus(todoState, action)
    case 'SHOW_VISIBLE':
      return showVisible(todoState, action)
    default:
      return todoState
  }
}

function updateObject(oldObject, newValues) {
  // Encapsulate the idea of passing a new object as the first parameter
  // to Object.assign to ensure we correctly copy data instead of mutating
  return Object.assign({}, oldObject, newValues)
}

function addTodo(state, action) {
  const newTodos = state.todos.concat({
    id: action.payload.id,
    text: action.payload.text,
    completed: false,
  })

  return updateObject(state, { todos: newTodos })
}

function toggleStatus(state, action) {
  const idx = state.todos.findIndex(todo => todo.id === action.payload)
  const cloneTodos = [...state.todos]
  cloneTodos[idx] = {
    ...cloneTodos[idx],
    completed: !cloneTodos[idx].completed
  }

  return updateObject(state, { todos: cloneTodos })
}

function showVisible(state, action) {
  return updateObject(state, { visibilityFilter: action.payload })
}

export default todoReducer
