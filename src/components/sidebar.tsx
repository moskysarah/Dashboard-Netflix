// src/components/Sidebar.tsx
import { NavLink } from "react-router-dom";
import { 
  Home, 
  Film,  
  Users, 
  Settings, 
  Bookmark, 
} from "lucide-react";




export function Sidebar() {

  return (
    <div className="w-64 bg-[#E50914] border-l-1 border-black shadow-sm p-4">
            
      <nav className="space-y-2 mt-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg ${
              isActive ? "bg-red-500 text-[#FFFF] " : "text-white  hover:text-[#FFFF]   hover:bg-red-500"
            }`
          }
        >
          <Home size={18} /> {("Home")}
        </NavLink>

        <NavLink
          to="/users"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg ${
              isActive ? "bg-red-500 text-[#FFFF] " : "text-white  hover:text-[#FFFF]   hover:bg-red-500"
            }`
          }
        >
          <Users size={18} /> {("Users")}
        </NavLink>

        <NavLink
          to="/films"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg ${
              isActive ? "bg-red-500 text-[#FFFF] " : "text-white  hover:text-[#FFFF]   hover:bg-red-500"
            }`
          }
        >
          <Film size={18} /> {("Films")}
        </NavLink>

        <NavLink
          to="/bookmark"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg ${
              isActive ? "bg-red-500 text-[#FFFF] " : "text-white  hover:text-[#FFFF]   hover:bg-red-500"
            }`
          }
        >
          <Bookmark size={18} /> {("Bookmark")}
        </NavLink>

        <NavLink
          to="/setting"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg ${
              isActive ? "bg-red-500 text-[#FFFF] " : "text-white  hover:text-[#FFFF]   hover:bg-red-500"
            }`
          }
        >
          <Settings size={18} /> {("Settings")}
        </NavLink>

        
      </nav>
    </div>
  );
}
