import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import theme from './theme'
import App from './App'
import './index.css'
import { ThemeProvider} from "@mui/material/styles"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme ={theme}>
    <App />
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
