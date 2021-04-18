import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import './LoginNavBar.css';

const LoginNavBar = () => {
    return (
        <div className="navStyle">
            <Navbar>
                <Nav className="mx-auto">
                    <Link to="/mynearbyplaces">
                        <Navbar.Brand className="brand">mynearbyplaces</Navbar.Brand>
                    </Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default LoginNavBar;
