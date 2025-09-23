import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ children }) {
  const { session } = useAuth();

  if (!session) {
    // If there is no active session, redirect the user to the login page
    return <Navigate to="/auth" replace />;
  }

  // If there is a session, render the child components
  return children;
}

export default ProtectedRoute;
