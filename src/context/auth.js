//COMPONENTS
import { toast } from "react-toastify";

import { createContext, useContext, useState } from "react";

const Auth = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );

  const handleLogin = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const handleLogout = () => {
    setUser({});
    localStorage.clear();
    toast.success("Logout realizado com sucesso");
  };

  const value = {
    isUserLogged: Boolean(user?.email),
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
