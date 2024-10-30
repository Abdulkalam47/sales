import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './bg.css';
import logo from '../images/logo.png'; // Correct path to your logo image

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          <img src={logo} alt="Aman Sales Logo" />
          <span className="brand-text">Aman Sales</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link as={Link} to="/order" className="nav-link-custom">Products</Nav.Link>
            <Nav.Link as={Link} to="/cart" className="nav-link-custom">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
