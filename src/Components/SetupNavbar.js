import React from "react";
import { Link } from "react-router-dom";
import "./SetupNavbar.css";
function SetupNavbar() {
  return (
    <>
      <nav className="navbar  bg-transparent fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler navbar-toggler-button-color me-auto ms-sm-4 mt-2 mt-sm-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-sm-3" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/Home"
                  className="nav-link active"
                  aria-current="page"
                >
                  <span className="bg-secondary text-white px-1">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Vintage" className="nav-link">
                  <span className="bg-secondary text-white px-1"> Vintage</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/GreatTeam" className="nav-link">
                  <span className="bg-secondary text-white px-1">
                    GreatTeam
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Portfolio" className="nav-link">
                  <span className="bg-secondary text-white px-1">
                    Portfolio
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ContactUs" className="nav-link">
                  <span className="bg-secondary text-white px-1">
                    ContactUs
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default SetupNavbar;
