import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import SeatBooking from './components/pages/SeatBooking';
import Confirmation from './components/pages/Confirmation';
import Hero from './components/pages/Hero';
import Snack from './components/pages/Snack';
import Movies from './components/pages/Movies';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/booking/:movieId" element={<SeatBooking />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/Snack" element={<Snack />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;