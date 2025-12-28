// src/pages/Login.tsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/netflix_white-removebg-preview.png";
import { UserContext } from "../contexts/usercontext";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext)!; // ✅ ajout du "!" pour dire à TS que le contexte existe

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone && password) {
      // On simule la connexion d’un utilisateur
      setUser({
        phone,
        name: "Jean Dupont",
        role: "Agent",
        avatar:
          "https://i.pinimg.com/736x/a1/3f/e5/a13fe593cd044397afc8ce5d47598333.jpg",
      });
      navigate("/home"); // ✅ redirection après login
    } else {
      alert("Veuillez entrer un numéro et un mot de passe valides.");
    }
  };

  return (
    <div className="min-h-screen flex bg-[#000000]">
      {/* Partie gauche (illustration) */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-b from-[#E50914] bg-[#000000] items-center justify-center">
        <img
          src={loginImage}
          alt="Login illustration"
          className="object-contain h-3/4 rounded-2xl w-80 h-80"
        />
      </div>

      {/* Partie droite (formulaire) */}
      <div className="flex flex-1 items-center justify-center p-8 ">
        <div className="w-full max-w-md bg-[#000000] border-2 border-[#E50914] rounded-2xl shadow-xl p-8 space-y-6">
          <h1 className="text-3xl font-extrabold text-gray-50 text-center">
            Welcome
          </h1>
          <p className="text-center text-gray-500">
            Log in to see all your movies
          </p>

          <form onSubmit={handleLogin} className="space-y-4 ">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              className="w-full border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
            />
            <button
              className="w-full cursor-pointer bg-[#E50914] text-white py-2 rounded-lg font-semibold shadow hover:bg-red-700 transition"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
