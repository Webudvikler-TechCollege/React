import './App.scss';
import { Header } from './Components/Partials/Header/Header'
import { Main } from './Components/Partials/Main/Main'
import { Footer } from './Components/Partials/Footer/Footer'

function App() {
  return (
    <div className="container">
      <div>
        <Header />
      </div>
      <div>
        <nav></nav>
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;