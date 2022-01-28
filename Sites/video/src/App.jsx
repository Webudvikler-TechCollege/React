import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRouter } from './Components/AppRouter/AppRouter'
import { Header } from './Components/Partials/Header/Header'
import { Main } from './Components/Partials/Main/Main'
import { Footer } from './Components/Partials/Footer/Footer'

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