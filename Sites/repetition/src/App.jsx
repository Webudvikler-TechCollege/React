import { BrowserRouter } from 'react-router-dom';
import { Header } from './Components/Partials/Header';
import { Main } from './Components/Partials/Main';
import { Footer } from './Components/Partials//Footer';
import { AppRouter } from './Components/App/Router/Router';
import { Nav } from './Components/Partials/Nav';

function App() {
  return (
    <BrowserRouter>
        <Header></Header>
        <Nav />
        <Main>
          <AppRouter />
        </Main>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
