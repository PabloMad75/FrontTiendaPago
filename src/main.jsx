import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <PayPalScriptProvider
  options={{
    "client-id":import.meta.env.VITE_PAYPAL_CLIENT_ID
  }}
  >

    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PayPalScriptProvider>
  // </React.StrictMode>,
)
