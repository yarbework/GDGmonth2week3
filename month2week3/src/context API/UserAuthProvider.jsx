import { useState, createContext } from "react";

export const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = () => {
    setUser({ name: "aba", email: "ababicha@gmail.com" });
  };
  const logout = () => {
    setUser(null);
  };
  const userAuthContextValue = {
    user,
    login,
    logout,
  };
  return (
    <UserAuthContext.Provider value={userAuthContextValue}>
      {children}
    </UserAuthContext.Provider>
  );
};
