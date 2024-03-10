import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navbar.css'

function OffcanvasExample() {
  // Render only for the 'md' size
  const expand = 'md';

  return (
    <Navbar expand={expand} className="bg-dark-custom uppercase nav">
      <Container fluid className='height'>
        <Navbar.Brand href="#" className='logo'>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
        </Navbar.Brand>
          <span className='line'></span>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton className='background'>
            {/* <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>

            </Offcanvas.Title> */}
          </Offcanvas.Header>
          <Offcanvas.Body className='justify-content-end background'>
            <Nav className="justify-content-end primary-navigation fs-300 navigation-titles underline-indicators nav-background">
              <NavLink className={'nav-link-custom ff-sans-cond text-white letter-spacing-2'} to='/'><span className='num'>00</span>Home</NavLink>
              <NavLink className={'nav-link-custom ff-sans-cond text-white letter-spacing-2'} to='/Destination'><span className='num'>01</span>Destination</NavLink>
              <NavLink className={'nav-link-custom ff-sans-cond text-white letter-spacing-2'} to='/Crew'><span className='num'>02</span>Crew</NavLink>
              <NavLink className={'nav-link-custom ff-sans-cond text-white letter-spacing-2'} to='/Technology'><span className='num'>03</span>Technology</NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default OffcanvasExample;
