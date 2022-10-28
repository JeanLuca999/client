//CONTEXT
import { AuthProvider } from "./context/auth";

//COMPONENTS
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

//PAGES
import { CreateAccount } from "./pages/CreateAccount/CreateAccount";

const App = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/join" element={<CreateAccount />} />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <h1>a protected page</h1>
                </PrivateRoute>
              }
            />

            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
