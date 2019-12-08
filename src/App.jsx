import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core/styles'
import { defaultTheme } from './theme'
import configureStore from './store/configureStore'
import { ToastContainer } from 'react-toastify'
import { Router } from 'react-router-dom'
import Routes from './components/Routes'
import history from './history'

import 'react-toastify/dist/ReactToastify.css'
import './App.scss'
import MainLayout from './layouts/MainLayout/MainLayout'
const store = configureStore()

const App = () => {
  const theme = React.useMemo(() => defaultTheme, [])

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            draggable
            pauseOnHover
            newestOnTop
            closeOnClick
          />

          <Router history={history}>
            <MainLayout>
              <Routes />
            </MainLayout>
          </Router>
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default App
