//HOOKS
import { useAuth } from "../../context/auth";

//COMPONENTS
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { isUserLogged } = useAuth();

  if (isUserLogged === false) {
    return <Navigate to="/" replace />;
  }

  return children;
};
