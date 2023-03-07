import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import NavTabs from './components/navLinks';
import Footer from './components/Footer';


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