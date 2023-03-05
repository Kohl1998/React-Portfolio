import React from 'react';
import { HashRouter, HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App () {
    return (
        <HashRouter>
            <Routes>
                {/* / Sets home as default path */}
                <Route path='/' element={<Home/>}/>
                <Route path='header' element={<Header/>}/>
                <Route path='gallery' element={<Gallery/>}/>
                <Route path='project' element={<Projects/>}/>
                <Route path='contact' element={<Contact/>}/>
            </Routes>
        </HashRouter>
    )
}

export default App