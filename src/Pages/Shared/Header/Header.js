import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import './Header.css';

import logo from '../../../Images/logo.png';

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };
    console.log(user);
    return (
        <div className="header">
            <Navbar bg="none" expand="lg">
                <Container>
                    <Navbar.Brand href="#"><Link to="/" className="logo"><img src={logo} alt="" /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className="text-dark" as={Link} to="/">Home</Nav.Link>
                            <Nav.Link className="text-dark" href="/home#services">Services</Nav.Link>
                            <Nav.Link className="text-dark" href="/home#footer">Contact</Nav.Link>
                            <Nav.Link className="text-dark" as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link className="text-dark" as={Link} to="/about">About Me</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <div className="button-container d-flex align-items-center">
                                <Button variant="link" className="text-decoration-none text-dark">{user?.displayName}</Button>
                                {user ? <Button variant="link" className="text-decoration-none text-dark" onClick={() => logout()}>Log Out</Button> : <Nav.Link as={Link} className="nav-links" to="/login"><Button variant="link" className="text-decoration-none text-dark">Login</Button></Nav.Link>}
                            </div>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
};

export default Header;