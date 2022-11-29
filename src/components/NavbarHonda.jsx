import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import logoHonda from '../assets/images/honda-motos-logo.png'
import instagram from '../assets/images/instagram.png';
import facebook from '../assets/images/facebook.png';
import twitter from '../assets/images/twitter.png';
import './navbarStyle.css';
import CartWidget from './CartWidget';

export default function NavbarHonda() {
  return (
    <>
        <Navbar className='navBarMotos' bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
        <NavDropdown className='p-2' title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Honda Motos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Post Venta
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Concecionarios Oficiales</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Quiero Mi Honda
              </NavDropdown.Item>
            </NavDropdown>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="w-100 d-flex justify-content-end">
            <Button href='#' target='_blanck' className='honda' variant="link">
                <img className='logoHonda' src={logoHonda} alt="santiago ruiz" />
            </Button>
        </Nav>
          <Nav className="containerLogo w-100">
            <div className="d-flex justify-content-end">
                <img className='logoRedes' src={instagram} alt="santiago ruiz" />
                <img className='logoRedes' src={facebook} alt="santiago ruiz" />
                <img className='logoRedes' src={twitter} alt="santiago ruiz" />
                <CartWidget />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>    
    </>
  )
};