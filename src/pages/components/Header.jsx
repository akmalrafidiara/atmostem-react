import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="container-fluid sticky-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark p-0">
            <Link
              to="/"
              className="navbar-brand d-flex align-items-center gap-2"
            >
              <img
                src="/img/logo_atmostem_white.png"
                alt="Atmostem"
                className="img-fluid me-2"
                style={{ width: "40px" }}
              />
              <h2 className="text-white mb-0">
                Atmostem<span className="text-dark">.</span>
              </h2>
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
                <NavLink
                  to="/"
                  className="nav-item nav-link"
                  activeclassname="active"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="nav-item nav-link"
                  activeclassname="active"
                >
                  About
                </NavLink>
                <NavLink
                  to="/concern"
                  className="nav-item nav-link"
                  activeclassname="active"
                >
                  Concern
                </NavLink>
                <NavLink
                  to="/article"
                  className="nav-item nav-link"
                  activeclassname="active"
                >
                  Information
                </NavLink>
                <div className="nav-item dropdown">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Components
                  </Link>
                  <div className="dropdown-menu bg-light mt-2">
                    <Link to="/steam" className="dropdown-item">
                      STEAM
                    </Link>
                    <Link to="/stop-climate-change" className="dropdown-item">
                      STOP Climate Change!
                    </Link>
                    <Link to="/udara" className="dropdown-item">
                      Udara
                    </Link>
                    <Link to="/atmosfer" className="dropdown-item">
                      Atmosfer
                    </Link>
                    <Link to="/ozon" className="dropdown-item">
                      Lapisan Ozon
                    </Link>
                    <Link to="/efek-rumah-kaca" className="dropdown-item">
                      Efek Rumah Kaca
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
