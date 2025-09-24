import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => useContext(AppContext);

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
