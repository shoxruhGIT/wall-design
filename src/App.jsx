import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Login from "./components/login";
import LoginLayout from "./layouts/login-layout.jsx";
import WarhouseLayout from "./layouts/warhouse-layout.jsx";
import Warhouse from "./components/warhouse";
import AdminLayout from "./layouts/admin-layout.jsx";
import Admin from "./components/admin.jsx";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("accessToken");
  const role = localStorage.getItem("role");

  if (!token) return <Navigate to="/" />;

  if (role === "admin") {
    return <AdminLayout>{children}</AdminLayout>;
  }

  if (role === "staff") {
    return <WarhouseLayout>{children}</WarhouseLayout>;
  }

  return;
};

const LoginRedirect = ({ children }) => {
  const token = localStorage.getItem("accessToken");
  const role = localStorage.getItem("role");

  if (token) {
    if (role === "admin") return <Navigate to="/admin" />;
    if (role === "staff") return <Navigate to="/warhouse" />;
  }

  return children;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LoginLayout />}>
          <Route
            path="/"
            element={
              <LoginRedirect>
                <Login />
              </LoginRedirect>
            }
          />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/warhouse" element={<Warhouse />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
