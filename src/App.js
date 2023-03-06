import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Projects from './components/Projects';
import NavTabs from './components/navLinks';

function App () {
    return (
        <Router>
            <div>
            <Routes>
                {/* / Sets home as default path */}
                <Route path='/' element={<Home/>}/>
                <Route path='header' element={<Header/>}/>
                <Route path='gallery' element={<Gallery/>}/>
                <Route path='project' element={<Projects/>}/>
                <Route path='contact' element={<Contact/>}/>
            </Routes>
            </div>
        </Router>
    )
}

export default App