import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AllBeersPage from './pages/AllBeersPage';
import NewBeerPage from './pages/NewBeerPage';
import RandomBeerPage from './pages/RandomBeerPage';
import SingleBeerPage from './pages/SingleBeerPage';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeersPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<NewBeerPage />} />
        <Route path="/beers/:beerId" element={<SingleBeerPage />} />
      </Routes>
    </div>
  );
}