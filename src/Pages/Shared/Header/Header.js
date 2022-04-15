import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo.png';
const Header = () => {
    return (
        <Navbar bg="primary" className="text-light" sticky="top" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/"><img src={logo} height="50" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="home#services">Services</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item  className="text-light" href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="home#experts">Experts</NavDropdown.Item>
                            <NavDropdown.Item href="">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/about">About</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;