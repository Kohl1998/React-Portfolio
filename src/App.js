import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Projects from './components/Projects';
import NavTabs from './components/navLinks';

function App () {
    return (
        <Router>
            <Routes>
                {/* / Sets home as default path */}
                <Route exact path='/' element={<Home/>}/>
                <Route path='header' element={<Header />}/>
                <Route path='gallery' element={<Gallery />}/>
                <Route path='projects' element={<Projects />}/>
                <Route path='contact' element={<Contact />}/>
            </Routes>
        </Router>
    )
}

export default App