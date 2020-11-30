import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { client } from './ApolloClient/client'
import { ApolloProvider } from '@apollo/client'
import Page from './pages/Page'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <main>
        <Switch>
          <Route path="/" exact component={Page} />
        </Switch>
      </main>
    </ApolloProvider>
  )
}

export default App
