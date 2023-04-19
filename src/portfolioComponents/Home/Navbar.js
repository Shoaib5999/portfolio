import React from "react";
import "../Home/Navbar.css";

export default function Navbar() {
  
  return (
    <>
    
      <nav className="navbar navbar-expand-lg nav-color">
        <div className="container-fluid">
          <a className="navbar-brand" id="brand" href="#home">
            SHOAIB 
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active home  scroll"
                  aria-current="page"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  scroll" href="#aboutId">
                  AboutMe
                </a>
              </li>
              <li className="nav-item dropdown"></li>
              <li className="nav-item">
                <a
                  className="nav-link  scroll"
                  href="#Contactme"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
