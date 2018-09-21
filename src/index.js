import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import createRoutes from './routes'
import { AppContainer } from 'react-hot-loader'
import './styles/styles.scss'

render(
  <AppContainer>
    <Router>
      {createRoutes()}
    </Router>
  </AppContainer>,
  document.getElementById('root')
)

if (module && module.hot) {
  module.hot.accept()
}
