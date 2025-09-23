import React, { useState } from 'react';
import { AppContext } from './appContextObject';

export const AppProvider = ({ children }) => {
  const [aiMode, setAiMode] = useState(false);

  const toggleAiMode = () => {
    setAiMode(prevMode => !prevMode);
  };

  return (
    <AppContext.Provider value={{ aiMode, toggleAiMode }}>
      {children}
    </AppContext.Provider>
  );
};
