import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './NavBar.css';

function NavBar() {
  const { user, signOut } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="navbar-item">ACAP Workshop</NavLink>
      </div>
      <div className="navbar-menu">
        <NavLink to="/" className="navbar-item" end>Home</NavLink>
        <NavLink to="/modules" className="navbar-item">Modules</NavLink>
        {/* We will add more links later */}
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          {user ? (
            <div className="buttons">
              <span>{user.email}</span>
              <button onClick={signOut} className="button is-light">Log out</button>
            </div>
          ) : (
            <div className="buttons">
              <NavLink to="/auth" className="button is-primary"><strong>Sign up</strong></NavLink>
              <NavLink to="/auth" className="button is-light">Log in</NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
