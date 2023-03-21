import me from './images/me.jpg';
import React from 'react';
import "./Home.css"
import Header from '../Header/Header';

function Home() {
  return (
    <div>
      <Header />
      <div className='content-wrapper'>
      <h3>Welcome!, my name is Kohl Vernon</h3>
      </div>
      <div className='content-text'>
      <p>I am a front-end web developer with a love for design, and functionality</p>
      </div>
      <div style={{textAlign: 'center'}}>
        <img src={me}/> 
      </div>
    </div>
  )
}


export default Home