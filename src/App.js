import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import StarshipsList from "./Components/StarshipsList"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path='starshipslist' element={<StarshipsList />} />
      </Routes>
    </div>
  );
}

export default App;
