import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Row, Col, Image, FormControl } from 'react-bootstrap';
import "../css/Header.css";
// import laptopImg from "../assets/laptopImg.jpg"
import macbook from "../assets/macbook.png"
import { BsSearch } from 'react-icons/bs';

const Header = () => {
  return (
    <>
      <div className='header_outermost_div'>
        <Container>
          <Row className='frst_row'>
            <Col md={6} className="main_heading">Domo Tech</Col>
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
              <div style={{ alignItems: 'left' }}>
                <div className="header_texts align_start">
                  <p>Modern IT &</p>
                  <p>Tech Service</p>
                  <p>Creation</p>
                </div>
                <div className='align_start text_div'>
                  <p className="header_subtext">Society excited by cottage private an it esteems.Fully begin on by woundsan.</p><p className="header_subtext">Girl rich in do up or both. At declared in as rejoiced of together.He impression collecting</p> <p className="header_subtext"> delightful unpleasent by prosperous as on. </p>
                </div>
              </div>
              <div className='search_grp'>
                <FormControl
                  type="search"
                  placeholder="Search For Service : Marketing,Advertisement"
                  className="searchbar"
                />
                <div className="search-icon"><BsSearch /></div>
              </div>
            </Col>
            <Col md={6}>
              <Image className='laptopImg' src={macbook} fluid />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;
