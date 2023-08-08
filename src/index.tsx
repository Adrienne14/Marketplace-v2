import React from 'react'
import ReactDOM from 'react-dom'
import 'index.d'
import App from './App'
import Providers from './Providers'
import './css/styleFX.css'

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root'),
)
