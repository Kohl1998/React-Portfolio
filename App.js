import React from 'react';
import { HashRouter, HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './src/components/Header';
import Home from './src/components/Home';
import Gallery from './src/components/Gallery';
import Contact from './src/components/Contact';


function App () {
    return (
        <HashRouter>
            <Routes>
                <Route path='header' element={<Header/>}/>
                <Route path='home' element={<Home/>}/>
                <Route path='gallery' element={<Gallery/>}/>
                <Route path='project' element={<Project/>}/>
                <Route path='contact' element={<Contact/>}/>
            </Routes>
        </HashRouter>
    )
}

export default App