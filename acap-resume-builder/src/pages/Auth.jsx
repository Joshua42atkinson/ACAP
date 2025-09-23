import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import './Auth.css';

function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      navigate('/resume-builder');
    } catch (error) {
      setMessage(`Error: ${error.error_description || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      setLoading(true);
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      setMessage('Success! Please check your email for a confirmation link.');
    } catch (error) {
      setMessage(`Error: ${error.error_description || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form-card">
        <h1 className="auth-header">Career Quest Portal</h1>
        <p className="auth-description">Sign in or create an account to save your progress and begin your quest.</p>
        {message && <div className={`auth-message ${message.startsWith('Error') ? 'error' : 'success'}`}>{message}</div>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="input-field"
              type="email"
              placeholder="your.email@example.com"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="input-field"
              type="password"
              placeholder="Your password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button-group">
            <button className="button-primary" type="submit" disabled={loading}>
              {loading ? <span>Logging in...</span> : <span>Log In</span>}
            </button>
            {/* The sign up button now calls handleSignup */}
            <button className="button-secondary" type="button" onClick={handleSignup} disabled={loading}>
              {loading ? <span>Signing up...</span> : <span>Sign Up</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;
