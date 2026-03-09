import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { access } = useSelector((state) => state.auth);
  const location = useLocation();

  if (access) {
    // If logged in, redirect away from public page to dashboard or previous location
    const from = location.state?.from?.pathname || "/";
    return <Navigate to={from} replace />;
  }

  return children;
};

export default PublicRoute;
