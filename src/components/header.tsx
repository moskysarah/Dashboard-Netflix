// src/components/Header.tsx
import NetflixLogo from "./netflixLogo"; // import logo netflix

import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center justify-between h-16 px-6  border-b-1 border-red-400 bg-[#E50914] text-white">
     
      <NetflixLogo />
      
      {/*icon reseau sociaux+login*/}

      <div className="flex items-center space-x-4 text-xl">
        <FaFacebook className="hover:text-red-400 transition-colors" />
        <FaInstagram className="hover:text-red-400 transition-colors" />
        <FaYoutube className="hover:text-red-400 transition-colors" />
        <FaTwitter className="hover:text-red-400 transition-colors" />
        <a href="/login" className="ml-4 hover:text-red-400 transition-colors">
          Login
        </a>
      </div>
    </header>
  );
}

export { Header };
