import "./App.scss"
import Footer from "./Components/Partials/Footer/Footer"
import Header from "./Components/Partials/Header/Header"
import Main from "./Components/Partials/Main/Main"
import { BrowserRouter } from 'react-router-dom'
import Navigation from "./Components/Partials/Navigation/Navigation"
import AppRouter from "./Components/App/AppRouter/AppRouter"


const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Header pageTitle="Velkommen til min side" />
      <Navigation />
      <Main>
        <AppRouter />
      </Main>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App
