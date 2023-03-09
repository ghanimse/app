import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'

const root = document.getElementById('root') as Element;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
