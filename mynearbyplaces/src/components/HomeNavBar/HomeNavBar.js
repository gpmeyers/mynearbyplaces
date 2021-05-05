import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeNavBar = () => {
    return (
        <div>
            <Navbar className="w-75 mx-auto" bg="transparent">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Item className="mx-3">
                            <Link to="/mynearbyplaces">Write a Review</Link>
                        </Nav.Item>
                        <Nav.Item className="mx-3">
                            <Link to="/mynearbyplaces/add">Add a Place</Link>
                        </Nav.Item>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Item className="mx-3">
                            <Link to="/mynearbyplaces/login">Login</Link>
                        </Nav.Item>
                        <Nav.Item className="mx-3">
                            <Link to="/mynearbyplaces/signup">Sign Up</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default HomeNavBar;
