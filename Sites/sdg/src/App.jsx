import { Header } from "./Components/Partials/Header";
import { Nav } from "./Components/Partials/Nav";
import { Main } from "./Components/Partials/Main";
import { Footer } from "./Components/Partials/Footer";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from './Components/App/Router/Router'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header></Header>
        <Nav></Nav>
        <Main>
          <AppRouter />
        </Main>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
