import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="navbar-item">ACAP Workshop</NavLink>
      </div>
      <div className="navbar-menu">
        <NavLink to="/" className="navbar-item" end>Home</NavLink>
        <NavLink to="/modules" className="navbar-item">Course Modules</NavLink>
        <NavLink to="/resources" className="navbar-item">Resource Hub</NavLink>
        <NavLink to="/forum" className="navbar-item">Community Forum</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
