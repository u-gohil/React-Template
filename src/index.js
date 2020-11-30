import React, { useContext } from 'react'
import Store, { Context } from './store/Store'
import ReactDOM from 'react-dom'
import App from './app'
import { BrowserRouter } from 'react-router-dom'

//TO DO: FIX CONSTANT UPDATE STATE

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Store>
  </React.StrictMode>,
  document.getElementById('app')
)
