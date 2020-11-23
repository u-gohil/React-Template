import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Page from './pages/Page'

const App = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Page} />
      </Switch>
    </main>
  )
}

export default App
