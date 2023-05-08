import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Discover from './pages/Discover';
import Soon from './pages/Soon';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/coming-soon" element={<Soon />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App