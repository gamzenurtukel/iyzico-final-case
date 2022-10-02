import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import StarshipsList from "./Components/StarshipsList"
import StarshipDetails from './Components/StarshipDetails';
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path='starshipslist' element={<StarshipsList />} />
        <Route path='starshipdetail' element={<StarshipDetails />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;
