import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import './NavBar.css';

function NavBar() {
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
      </div>
      <div className="navbar-menu">
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
           <span style={{ marginLeft: '8px', marginRight: '20px' }}>AI Mode</span>
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
    </nav>
  );
}

export default NavBar;
