import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { ThemeProvider } from "styled-components"
import { theme } from "./Components/Styled/Theme"
import { GlobalStyle } from "./Components/Styled/Global.style"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./Components/App/Providers/AuthProvider"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    {/* Auth Provider for login data */}
    <AuthProvider>
      {/* Theme Provider for style values */}
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* BrowserRouter for route handling */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
)
