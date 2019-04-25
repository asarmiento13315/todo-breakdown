import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'cfg-redux'

import App from 'components/App'

import './index.css'
import 'normalize.css'
import * as serviceWorker from './serviceWorker'

const store = configureStore()

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
