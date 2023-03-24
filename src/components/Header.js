import React from "react";
import { withAuth0 } from "@auth0/auth0-react";
import { Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginButton from "./Login";
import LogoutButton from "./Logout";
import "./HeadFoot.css";

class Header extends React.Component {
  render() {
    return (
      <body className="header">
        <Navbar collapseOnSelect expand="lg" variant="light">
          <div className="logo">
            <Navbar.Brand className="title">Crap Collector</Navbar.Brand>
            <p>Your Own Personal Database</p>
            {this.props.auth0.isAuthenticated ? (
              <LogoutButton />
            ) : (
              <LoginButton />
            )}
          </div>
          <div className="navItems">
            <NavItem>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </NavItem>
            {this.props.auth0.isAuthenticated && (
              <NavItem>
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
              </NavItem>
            )}
          </div>
        </Navbar>
      </body>
    );
  }
}

export default withAuth0(Header);
