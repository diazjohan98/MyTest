import { useState, createContext, useContext } from 'react';

// Creamos el contexto de autenticación
const AuthContext = createContext();

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleAuth = () => {
    setIsAuthenticated(prevAuth => !prevAuth);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

// Función personalizada para usar el contexto
export const useAuth = () => {
  return useContext(AuthContext);
};