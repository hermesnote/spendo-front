// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Counter from './components/Counter';
import Counter0 from './components/Counter0';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import TestCORS from './TestCORS';  // Import the TestCORS component
import DataFetcher from './components/DataFetcher';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/test-cors' element={<TestCORS />} /> {/* Add the rout for TestCORS */}
        <Route path='/counter' element={<Counter />} /> {/* Add the rout for Counter */}
        <Route path='/counter0' element={<Counter0 />} /> {/* Add the rout for Counter0 */}
        <Route path='/counter1' element={<Counter1 />} /> {/* Add the rout for Counter1 */}
        <Route path='/counter2' element={<Counter2 />} /> {/* Add the rout for Counter2 */}
        <Route path='/fetch-data' element={<DataFetcher />} /> {/* Add the rout for DataFetcher */}
      </Routes>
    </Router>
  );
}

export default App;
