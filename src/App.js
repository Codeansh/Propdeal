import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/home/Home';
import About from './components/about/About';
import "./App.css";
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="/about" element={<About/>} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;