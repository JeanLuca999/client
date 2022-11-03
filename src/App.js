//CONTEXT
import { AuthProvider } from "./context/auth";

//COMPONENTS
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { Header } from "./components/Header";

//PAGES
import { CreateAccount, Login } from "./pages";
import { ToastContainer } from "react-toastify";
import { Posts } from "./pages/Posts";

const App = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <Header />
                </PrivateRoute>
              }
            >
              <Route index element={<Posts />} />
            </Route>

            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </AuthProvider>
    </>
  );
};

export default App;
