import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../contexts/usercontext";

const ProtectedRoute = () => {
  const { user } = useContext(UserContext)!;
    // 🚫
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // ✅ Connecté → accès autorisé
  return <Outlet />;
};

export default ProtectedRoute;
