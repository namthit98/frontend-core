import { combineReducers } from 'redux'
import todoReducer from './reducers/todo.reducer'


const appReducer = combineReducers({
  todoReducer,
})

export default appReducer
