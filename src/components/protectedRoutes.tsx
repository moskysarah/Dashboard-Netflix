
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../contexts/usercontext";

const ProtectedRoute = () => {
  const { user } = useUser() as unknown as { user: any };

  // 🔹 si pas connecté → redirection vers login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; // sinon afficher les enfants
};


export { ProtectedRoute };