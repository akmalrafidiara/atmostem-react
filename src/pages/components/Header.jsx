import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="container-fluid sticky-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark p-0">
            <Link to="/error" className="navbar-brand">
              <h1 className="text-white">
                ATMO<span className="text-dark">.</span>
                <span className="fs-3">STEM</span>
              </h1>
            </Link>
            <button
              type="button"
              className="navbar-toggler ms-auto me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto">
                {/* <Link to="" className="nav-item nav-link {{ Request::is('atmostem/home*') ? 'active text-white fw-bold' : '' }}">Home</Link> */}
                <Link to="/" className="nav-item nav-link">
                  Home
                </Link>
                <Link to="/about" className="nav-item nav-link">
                  About
                </Link>
                <Link to="/concern" className="nav-item nav-link">
                  Concern
                </Link>
                <Link to="/error" className="nav-item nav-link">
                  Information
                </Link>
                <div className="nav-item dropdown">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    STEM Components
                  </Link>
                  <div className="dropdown-menu bg-light mt-2">
                    <Link to="/error" className="dropdown-item">
                      Science
                    </Link>
                    <Link to="/error" className="dropdown-item">
                      Technology
                    </Link>
                    <Link to="/error" className="dropdown-item">
                      Engeenering
                    </Link>
                    <Link to="/error" className="dropdown-item">
                      Art
                    </Link>
                    <Link to="/error" className="dropdown-item">
                      Mathematics
                    </Link>
                    <Link to="/error" className="dropdown-item">
                      FAQs
                    </Link>
                    <Link to="/error" className="dropdown-item">
                      Testimonial
                    </Link>
                    <Link to="/error" className="dropdown-item">
                      404 Page
                    </Link>
                  </div>
                </div>
                <Link to="/error" className="nav-item nav-link">
                  Forums
                </Link>
              </div>
              <button
                type="button"
                className="btn text-white p-0 d-none d-lg-block"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <i className="fa fa-search"></i>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
