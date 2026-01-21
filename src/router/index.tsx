import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/layout";
import ProtectedRoute from "./ProtectedRoute";

// Pages
import Home from "../pages/Home";
import Bookmark from "../pages/Bookmark";
import Films from "../pages/Films";
import Settings from "../pages/Settings";
import Users from "../pages/Users";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup", // ✅ AJOUT OBLIGATOIRE
    element: <Signup />,
  },
  {
    element: <ProtectedRoute />, // 🔐 routes protégées
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
          { path: "home", element: <Home /> },
          { path: "bookmark", element: <Bookmark /> },
          { path: "films", element: <Films /> },
          { path: "settings", element: <Settings /> },
          { path: "users", element: <Users /> },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);
