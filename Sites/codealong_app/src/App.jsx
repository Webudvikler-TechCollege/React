import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from './Components/Partials/Header/Header'
import { Main } from './Components/Partials/Main/Main'
import { Footer } from './Components/Partials/Footer/Footer'
import { AppRouter } from './Components/AppRouter/AppRouter';

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Main>
          <AppRouter />
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;