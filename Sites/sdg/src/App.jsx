import { Header } from "./Components/Partials/Header";
import { NavFromArray } from "./Components/Partials/NavFromArray";
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
        <NavFromArray></NavFromArray>
        <Main>
          <AppRouter />
        </Main>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
