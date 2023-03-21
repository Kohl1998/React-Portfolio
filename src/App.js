import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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