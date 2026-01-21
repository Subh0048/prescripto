import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "./Auth";


const ProtectedRoute = () => {

    console.log(isAuthenticated())
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
