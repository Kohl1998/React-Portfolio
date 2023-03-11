import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Project from './components/Projects/Projects';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='projects' element={<Project />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
