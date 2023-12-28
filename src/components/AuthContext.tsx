import React, { createContext, useContext, useState } from 'react';

interface AuthContextProps {
  isUserAuthenticated: boolean;
  setIsUserAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  // Load user data from AsyncStorage and update state
  // ...

  return (
    <AuthContext.Provider value={{ isUserAuthenticated, setIsUserAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
