import './App.css';
import { Header } from './components/partials/Header/Header'
import { Main } from './components/partials/Main/Main'
import { Footer } from './components/partials/Footer/Footer'

function App() {
  return (
    <div className="sitewrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
