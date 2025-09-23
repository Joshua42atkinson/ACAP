import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { useAuth } from '../hooks/useAuth';
import './NavBar.css';

function NavBar() {
  const [isActive, setIsActive] = useState(false);
  const { aiMode, toggleAiMode } = useContext(AppContext);
  const { session, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate('/'); // Redirect to home page after logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="navbar-item">ACAP Workshop</NavLink>
        <button
          onClick={() => setIsActive(!isActive)}
          className={`navbar-burger ${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded={isActive}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-start" style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <NavLink to="/" className="navbar-item" end>Home</NavLink>
          <NavLink to="/modules" className="navbar-item">Course Modules</NavLink>
          <NavLink to="/resources" className="navbar-item">Resource Hub</NavLink>
          <NavLink to="/forum" className="navbar-item">Community Forum</NavLink>
          {session && <NavLink to="/resume-builder" className="navbar-item">Resume Builder</NavLink>}
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <label className="switch">
              <input type="checkbox" checked={aiMode} onChange={toggleAiMode} />
              <span className="slider round"></span>
            </label>
            <span style={{ marginLeft: '8px' }}>AI Mode</span>
          </div>
          <div className="navbar-item">
            {session ? (
              <button onClick={handleLogout} className="button is-light">
                Log Out
              </button>
            ) : (
              <NavLink to="/auth" className="button is-primary">
                Log In
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
