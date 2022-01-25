import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './Components/Partials/Header/Header'
import { Main } from './Components/Partials/Main/Main'
import { Footer } from './Components/Partials/Footer/Footer'
import { About } from './Components/Pages/About/About';
import { GoalList } from './Components/Pages/Goals/GoalList';
import { GoalDetails } from './Components/Pages/Goals/GoalDetails';
import { Timer } from './Components/Hooks/UseEffects/Timer';
import { ThreeCounts } from './Components/Hooks/UseEffects/ThreeCounts';
import { PropDrilling } from './Components/Hooks/UseContext/PropDrilling';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main>
          <Routes>
            <Route index element={'Forside'} />
            <Route path="/timer" element={<Timer />} />
            <Route path="/threecounts" element={<ThreeCounts />} />
            <Route path="/about" element={<About />} />
            <Route path="/context" element={<PropDrilling />} />
            <Route path="/goals">
              <Route index element={<GoalList />} />
              <Route path=":goal_id" element={<GoalDetails />} />
            </Route>
            <Route path="/products">
              <Route index element={'Produkt Liste'} />
              <Route path=":product_id" element={'Produkt detaljer'} />
            </Route>
            <Route path="*" element={'Siden blev ikke fundet'} />
          </Routes>
        </Main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
