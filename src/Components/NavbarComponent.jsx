// import sparrow css
import "../Style/Sparrow.css";

//navbar component css
import "../Style/NavbarComponent.css";

//import svg Data
import svgIcon from "../Components/SvgData.js";

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavbarComponent() {
  const contactno = "1-677-124-44227";
  return (
    <Navbar expand="lg" className="navbar-bg-color custom-navbar">
      <Container fluid>
        <Navbar.Brand to="/home" className="ms-6 ms-xl-7 ms-sm-5 fs-1 h1">
          SHIPPING
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-center">
          <Nav className=" fw-semibold custom-nav-menu mx-auto">
            <Link to="/Home" className="nav-link">
              Home
            </Link>
            <Link to="/About" className="nav-link">
              About
            </Link>
            <Link to="/Service" className="nav-link">
              Services
            </Link>
            <NavDropdown title="Page" id="basic-nav-dropdown">
              <Link to="action/3.1" className="dropdown-item">
                Action
              </Link>
              <Link to="/action/3.2" className="dropdown-item">
                Another action
              </Link>
              <Link to="/action/3.3" className="dropdown-item">
                Something
              </Link>

              <Link to="action/3.4" className="dropdown-item">
                Arham Ullah khan
              </Link>
            </NavDropdown>
            <Link to="/Contact" className="nav-link">
              Contact
            </Link>
            <Link to="/Contact" className="custom-phone-svg nav-link">
              {svgIcon.phoneIcon} CALL US {contactno}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
