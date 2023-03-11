import React from "react";
import Header from "../Header/Header";
import "./Home.css";
import me from './images/me.jpg';
import Footer from "../Footer/Footer";

function Home () {
    return (
        <div>
        <Header />
        <div className="header-container">
        <h1>Welcome, my name is Kohl Vernon</h1>
        <p>I am a front-end developer with an interest for design, martial arts, and simplicity</p>
        <p>I believe in respect, integrity, curiousity, and self-development. </p>
        <div className="image-container">
        <img src= {me} />
        </div>
        <Footer/>
        </div>
        </div> 
        )
}

export default Home