import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      alert('Logged in successfully!');
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      alert('Check your email for the login link!');
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Authentication</h2>
      <p>Sign up or log in to save your progress.</p>
      <form>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <button onClick={handleLogin} disabled={loading}>
            {loading ? <span>Loading...</span> : <span>Log In</span>}
          </button>
          <button onClick={handleSignUp} disabled={loading}>
            {loading ? <span>Loading...</span> : <span>Sign Up</span>}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Auth;
