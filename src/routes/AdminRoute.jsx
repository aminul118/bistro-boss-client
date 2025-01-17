import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import Loading from "../pages/shared/Loading";

const AdminRoute = ({ children }) => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const { user, loading } = useAuth();
  const location = useLocation();
  if (isAdminLoading || loading) {
    return <Loading />;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={location?.pathname} replace></Navigate>;
};

export default AdminRoute;
