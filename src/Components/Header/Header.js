import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div className="fluid">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand><Link to="/" className="text-decoration-none"><b>Laptop Bazar</b></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link ><CustomLink to="/">Home</CustomLink></Nav.Link>
                            <Nav.Link ><CustomLink to="/reviews">Reviews</CustomLink></Nav.Link>
                            <Nav.Link ><CustomLink to="/dashboard">Dashboard</CustomLink></Nav.Link>
                            <Nav.Link ><CustomLink to="/blogs">Blogs</CustomLink></Nav.Link>
                            <Nav.Link ><CustomLink to="/about">About</CustomLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;