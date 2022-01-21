import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './Components/Partials/Header/Header'
import { Main } from './Components/Partials/Main/Main'
import { Footer } from './Components/Partials/Footer/Footer'
import { Home } from './Components/Pages/Home/Home'
import { About } from './Components/Pages/About/About'
import { Gallery } from './Components/Gallery/Gallery';
import { Greetings } from './Components/Pages/Greetings/Greetings';
import { Timer } from './Components/Timer/Timer';
import { GoalList } from './Components/Pages/Goals/GoalList';
import { GoalDetails } from './Components/Pages/Goals/GoalDetails';

const arrImages = [
    /*
    { 
      id: 1,
      image: 'https://api.mediehuset.net/images/sdg/photos/1.jpg', 
      name: 'Afskaf fattigdom'
    },
    { 
      id: 2,
      image: 'https://api.mediehuset.net/images/sdg/photos/2.jpg', 
      name: 'Stop sult'
    },
    */
    { 
      id: 3,
      image: 'art1-foto-colourbox.jpg', 
      name: 'Test'
    }
]

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<Timer />} />
            <Route path="/goals" element={<GoalList />} />
            <Route path="/goals/:goal_id" element={<GoalDetails />} />
            <Route path="/gallery" element={<Gallery imageList={arrImages} />} />
          </Routes>
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;