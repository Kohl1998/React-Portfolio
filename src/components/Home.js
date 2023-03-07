import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import me from './images/me.jpg';
import React from 'react';
import { Container, Row, Col } from 'react-grid';


// Simple navbar with different sections to web pages
function Home () {
    return (
      <div>
        {/* the expand prop converts links into hamburger menu on smaller device*/}
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">KV</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Shifted navlinks to right */}
          <Nav className="justify-content-end" style={{width: '100%'}}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Header">Header</Nav.Link>
            <Nav.Link href="/Projects">Projects</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>  
      <Container>
        <Row>
          {/* imported react grid for various users */}
          <Col sm={12} md={6} lg={6} xl={6}> 
          <img src={me} alt="Photo of Kohl" height="400px" width="450px" style={{margin: '10px'}}>
          </img>
          </Col>
          <Col sm={12} md={6} lg={6} xl={6}>
            <div style={{marginTop: '30px', }}>
            <h3>Hello, my name is Kohl Vernon and I'm a front-end web developer</h3>
            <p>My mission is to continue cultivating ideas with like minded groups of people, and build teams that share similar values/beliefs.</p>
            <p>I belive in building for tomorrow.</p>
            <h6>
              Check out my Github account: <a href='https://github.com/Kohl1998?tab=repositories' target='_blank' >Click here</a>
            </h6>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    )
}


export default Home