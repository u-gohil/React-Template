import React, { useContext } from 'react'
import { StoreProvider } from "./store";
import ReactDOM from 'react-dom'
import App from './app'
import { BrowserRouter } from 'react-router-dom'

//TO DO: FIX CONSTANT UPDATE STATE

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('app')
)
