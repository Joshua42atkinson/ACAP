import { useContext } from 'react';
import { AuthContext } from '../context/authContextObject';

// Custom hook to easily use the auth context in other components
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
