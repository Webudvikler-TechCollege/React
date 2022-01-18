import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './Components/Partials/Header/Header'
import { Main } from './Components/Partials/Main/Main'
import { Footer } from './Components/Partials/Footer/Footer'
import { Home } from './Components/Pages/Home/Home'
import { About } from './Components/Pages/About/About'

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;