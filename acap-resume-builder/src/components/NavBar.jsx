import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import './NavBar.css';

function NavBar() {
  const { aiMode, toggleAiMode } = useContext(AppContext);

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
      <div className="navbar-end">
        <div className="navbar-item">
          <label className="switch">
            <input type="checkbox" checked={aiMode} onChange={toggleAiMode} />
            <span className="slider round"></span>
          </label>
           <span style={{ marginLeft: '8px' }}>AI Mode</span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
