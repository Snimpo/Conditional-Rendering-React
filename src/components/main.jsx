import App from './App.jsx'
import '../styles/index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )


//Challenge: Without moving the userIsRegistered variable,
//1. Show Login as the button text if userIsRegistered is true.
//Show Register as the button text if userIsRegistered is false.
//2. Only show the Confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true.


//Peronal notes: my approach would be creating 2 components one called Login and another one calles Register.
//once that is done, I'd setup a ternary operator to render the proper component based on the value of userIsRegistered.