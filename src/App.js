// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import TestCORS from './TestCORS';  // Import the TestCORS component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/test-cors' element={<TestCORS />} /> {/* Add the rout for TestCORS */}
      </Routes>
    </Router>
  );
}

export default App;
