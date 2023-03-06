import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import me from './images/me.jpg'

// Simple navbar with different sections to web pages
function Home () {
    return (
      <div>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">KV</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Header">Header</Nav.Link>
            <Nav.Link href="/Gallery">Gallery</Nav.Link>
            <Nav.Link href="/Projects">Projects</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>  
      <div style={{flex: 'row'}}>
      <img src={me} alt="Photo of Kohl" height="400px" style={{margin: '10px'}}>
      </img>
      </div>
      </div>
    )
}


export default Home