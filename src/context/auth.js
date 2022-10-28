import { createContext, useContext } from "react";

const Auth = createContext({});

export const AuthProvider = ({ children }) => {
  const user = localStorage.getItem("user");

  const handleLogin = () => {};

  const handleLogout = () => {};

  const value = {
    isUserLogged: false,
    user: user,
    handleLogin: handleLogin,
    handleLogout: handleLogout,
  };

  return <Auth.Provider value={value}>{children}</Auth.Provider>;
};

export const useAuth = () => {
  const context = useContext(Auth);
  return context;
};
