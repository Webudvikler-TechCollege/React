import './App.scss';
import { BrowserRouter } from 'react-router-dom'
import { Header } from './Components/Partials/Header/Header'
import { Main } from './Components/Partials/Main/Main'
import { Footer } from './Components/Partials/Footer/Footer'
import { AppRouter } from './Components/AppRouter/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main>
          <AppRouter />
        </Main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
