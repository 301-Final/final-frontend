import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import LoginButton from './Login';
import LogoutButton from './Logout';

class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
          <div className="logo">
            <Navbar.Brand>Crap Collector</Navbar.Brand>
            <p>Your Own Personal Database</p>
          </div>
          <div className="navItems">
            <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
            <NavItem><Link to="/about" className="nav-link">About Us</Link></NavItem>
            {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
            {
              this.props.auth0.isAuthenticated && <NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem>}
          </div>
        </Navbar>
      </>
    )
  }
}

export default withAuth0(Header);