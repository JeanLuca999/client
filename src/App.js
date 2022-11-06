//CONTEXT
import { AuthProvider } from "./context/auth";

//COMPONENTS
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { Header } from "./components/Header";

//PAGES
import { CreateAccount, Login } from "./pages";
import { ToastContainer } from "react-toastify";
import { Posts } from "./pages/Posts";
import { UserPosts } from "./pages/UserPosts/UserPosts";

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
              <Route path="posts" element={<UserPosts />} />
            </Route>

            <Route path="*" element={<Navigate to="/register" replace />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </AuthProvider>
    </>
  );
};

export default App;
