import { Routes, Route } from 'react-router-dom';
import Navibar from './pages/navibar/Navibar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Reservation from './pages/reservation/Reservation'

function App() {
  return (
    <>
      <Navibar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </>
  );
}

export default App;
