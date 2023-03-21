import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';


function App () {
    return (
        <Router>
            <Routes>
                {/* / Sets home as default path */}
                <Route exact path='/' element={<Home/>}/>
                <Route path='header' element={<Header />}/>
                <Route path='projects' element={<Projects />}/>
                <Route path='contact' element={<Contact />}/>
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
=======
import './App.css';
import Project from './components/Projects/Projects';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='projects' element={<Project />} />
        <Route path='contact' element={<Contact />} />
        <Route path='resume' element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
>>>>>>> 4e0c2e15ce2f9c1be90401041a43c604434140b5
