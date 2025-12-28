// src/layouts/Layout.tsx
import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";

export default function Layout() {
  return (
    <div className="flex flex-col h-screen bg-black text-white">
      {/* Header au-dessus */}
      <Header />

      {/* Partie principale : sidebar + contenu */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
export { Layout };