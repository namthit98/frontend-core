import React from 'react'
import { Provider } from 'react-redux'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import { defaultTheme } from './theme'
import configureStore from './store/configureStore'
import TodoViewContainer from './views/Todo/TodoViewContainer'

const store = configureStore()

const App = () => {
  const theme = React.useMemo(() => defaultTheme, [])

  return (
    <div>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <TodoViewContainer />
        </ThemeProvider>
      </Provider>
    </div>
  )
}

export default App
