import { Route, Routes } from 'react-router-dom';
import { GoalList, GoalDetails } from './components/pages/Goals';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Footer from './components/partials/Footer';
import Header from './components/partials/Header';

/**
 * Jeres router kan placeres i App.jsx 
 * Dog giver det mere ro i filen at lægge 
 * den i sin eget komponent
 * Routeren fungerer nærmest som en slags switch 
 * der kan skifte mellem visning af komponenter 
 * ud fra hvilken url man befinder sig på
 */

const App = () => {
  return (
    <div className="App">
        <Header />
        <main>
          <Routes>
            <Route index element={<Home />} />
            
            <Route path="/goals">
              <Route index element={<GoalList />} />
              <Route path=":id" element={<GoalDetails />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
    </div>
  );
}

export default App;
