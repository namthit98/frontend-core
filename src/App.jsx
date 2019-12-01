import React from 'react'
import { Provider } from 'react-redux'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import { defaultTheme } from './theme'
import configureStore from './store/configureStore'
import TodoViewContainer from './views/Todo/TodoViewContainer'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const store = configureStore()

const App = () => {
  const theme = React.useMemo(() => defaultTheme, [])

  return (
    <div>
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
          <TodoViewContainer />
        </ThemeProvider>
      </Provider>
    </div>
  )
}

export default App
