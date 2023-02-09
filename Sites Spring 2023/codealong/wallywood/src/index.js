import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { ThemeProvider } from "styled-components"
import { theme } from "./Components/Styled/Theme"
import { GlobalStyle } from "./Components/Styled/Global.style"
import { BrowserRouter } from "react-router-dom"
import {AuthProvider} from "./Components/App/Providers/AuthProvider"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
      <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
      </AuthProvider>
  </React.StrictMode>
)
