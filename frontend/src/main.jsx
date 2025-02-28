import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter}   from "react-router-dom";
import Header from "./oldalak/Header";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
      <BrowserRouter>
            <App />
      </BrowserRouter>
  </StrictMode>
)
