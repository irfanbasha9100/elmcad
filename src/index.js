import React from 'react'
import ReactDOM from 'react-dom/client'

import appStore from './app/store'
import { Provider } from 'react-redux'

import App from './App'

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
)