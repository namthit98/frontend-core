import produce from 'immer'

const initialState = {
  todos: [],
  visibilityFilter: 'ALL',
}

const todoReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'ADD_TODO':
        draft.todos.push({
          id: action.payload.id,
          text: action.payload.text,
          completed: false,
        })
        break

      case 'TOGGLE_STATUS_TODO':
        const idx = draft.todos.findIndex(todo => todo.id === action.payload)
        draft.todos[idx].completed = !draft.todos[idx].completed
        break

      case 'SHOW_VISIBLE':
        draft.visibilityFilter = action.payload
    }
  })

export default todoReducer
