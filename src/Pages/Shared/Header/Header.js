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

    return (
        <div className="header">
            <div className="container nav">
                <Link to="/" className="logo"><img src={logo} alt="" /></Link>
                <Nav.Link className="nav-links" href="/home#services">Services</Nav.Link>
                <Nav.Link className="nav-links" href="/home#footer">Contact</Nav.Link>
                <Link className="nav-links" to="/blogs">Blogs</Link>
                <Link className="nav-links" to="/about">About Me</Link>
                <div className="button-container">
                    {user ? <button className="signup-btn" onClick={() => logout()}>Log Out</button> : <Link className="signup-btn" to="/login">Login</Link>}
                </div>
            </div>
        </div>
    )
};

export default Header;