// src/router/router.tsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/layout";

// Pages
import Home from "../pages/Home";
import Bookmark from "../pages/Bookmark";
import Films from "../pages/Films";
import Settings from "../pages/Settings";
import Users from "../pages/Users";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/login", // 🔹 route indépendante
    element: <Login />,
  },
  {
    path: "/",       // 🔹 toutes les autres routes utilisent Layout
    element: <Layout />,
    children: [
      { index: true, element: <Home /> }, // http://localhost:5173/
      { path: "home", element: <Home /> },
      { path: "bookmark", element: <Bookmark /> },
      { path: "films", element: <Films /> },
      { path: "settings", element: <Settings /> },
      { path: "users", element: <Users /> },
    ],
    errorElement: <NotFound />,
  },
]);
