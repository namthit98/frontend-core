import React from 'react'
import { Provider } from 'react-redux'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import { defaultTheme } from './theme'
import configureStore from './store/configureStore'
import { ToastContainer } from 'react-toastify'
import TodoView from './views/Todo/TodoView'

import 'react-toastify/dist/ReactToastify.css'

const store = configureStore()

const App = () => {
  const theme = React.useMemo(() => defaultTheme, [])

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            pauseOnVisibilityChange
            draggable
            pauseOnHover
            newestOnTop
            closeOnClick
          />
          <TodoView />
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default App
