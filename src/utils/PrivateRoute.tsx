import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  // Replace with actual auth check
  const isAuthenticated = localStorage.getItem("token") !== null;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
