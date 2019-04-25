import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import HomePage from 'components/HomePage'
import AboutPage from 'components/AboutPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/'} exact component={HomePage} />
        <Route path={'/about/'} component={AboutPage} />
        <Redirect to={'/'} />
      </Switch>
    </Router>
  )
}

export default App
