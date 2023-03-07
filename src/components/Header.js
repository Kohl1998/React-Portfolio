import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// Imported Navbar

function Header () {
return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">KV</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Shifted navlinks to right */}
          <Nav className="justify-content-end" style={{width: '100%'}}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Header">Header</Nav.Link>
            <Nav.Link href="/Gallery">Gallery</Nav.Link>
            <Nav.Link href="/Projects">Projects</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>  
)


}


export default Header