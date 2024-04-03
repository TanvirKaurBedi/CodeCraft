import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import "../css/Header.css"

const Header = () => {
  return (
    <>
      <div className='header_outermost_div'>
        <Container>
          <Row>
            <Col md={6}>Domo Tech</Col>
            <Col md={6}>
              <Navbar expand="lg">
                <Nav className="me-auto">
                  <NavDropdown title="Home" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#news">News</NavDropdown.Item>
                    <NavDropdown.Item href="#reports">Reports</NavDropdown.Item>
                    <NavDropdown.Item href="#action">Actions</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#home">About Us</Nav.Link>
                  <Nav.Link href="#home">Services</Nav.Link>
                  <Nav.Link href="#home">Pricing</Nav.Link>
                  <Nav.Link href="#home">FAQ</Nav.Link>
                  <Nav.Link href="#home">Contact</Nav.Link>
                </Nav>
              </Navbar>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <p>Modern IT AND Tech Service Creation</p>
              <p>Society excited by cottage private an it esteems.Fully begin on by woundsan.Girl rich in do up or both. At declared in as rejoiced of together.He impression collecting delightful unpleasent by prosperous as on. </p>
              </Col>
            <Col md={6}></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;
