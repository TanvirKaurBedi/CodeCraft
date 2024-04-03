import React from 'react';
import { Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import "../css/Header.css"

const Header = () => {
return (
    <>
      <div className='header_outermost_div'>
        <Container>
          <Navbar expand="lg">
            <Container>
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
            </Container>
          </Navbar>
        </Container>
      </div>
         </>
  );
};

export default Header;
