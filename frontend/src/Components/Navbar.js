import React from "react";
import { NavLink } from 'react-router-dom';
import './Comp.css';
import logo from "./b.jpeg";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary border-bottom border-body sticky" data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="Logo" width="28" height="26" className="d-inline-block align-text-top mx-3" />
            Navbar
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/" activeClassName="active-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/create" activeClassName="active-link">Create</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/read" activeClassName="active-link">Read Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" activeClassName="active-link">Feedback</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/show" activeClassName="active-link">ShowFeed</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
