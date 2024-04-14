import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
// import './Icons.css'

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';

import BigSur from './pages/BigSur';
import DeathValley from './pages/DeathValley';
import HakoneGardens from './pages/HakoneGardens';
import NewMexico from './pages/NewMexico';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/portfolio" element={<Portfolio />} />
        
        <Route path="/portfolio/big-sur" element={<BigSur />} />
        <Route path="/portfolio/death-valley" element={<DeathValley />} />
        <Route path='/portfolio/hakone-gardens' element={<HakoneGardens />} />
        <Route path='/portfolio/new-mexico' element={<NewMexico />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;