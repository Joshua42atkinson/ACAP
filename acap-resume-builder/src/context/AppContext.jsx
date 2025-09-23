import React, { createContext, useState } from 'react';

export const AppContext = createContext();

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
