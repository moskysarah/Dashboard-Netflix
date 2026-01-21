import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import loginImage from "../assets/netflix_white-removebg-preview.png";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Email et mot de passe requis");
      return;
    }

    setLoading(true);

    try {
      // 1️⃣ Création du compte Supabase
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        return;
      }

      // 2️⃣ (Optionnel) création du profil
      if (data.user) {
        await supabase.from("profiles").insert({
          id: data.user.id,
          role: "user",
        });
      }

      // 3️⃣ Redirection vers login
      navigate("/login");
    } catch (err) {
      console.error(err);
      setError("Une erreur est survenue, veuillez réessayer");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-black">
      {/* Illustration */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-gradient-to-b from-[#E50914] to-black">
        <img
          src={loginImage}
          alt="Netflix signup"
          className="w-80 h-80 object-contain"
        />
      </div>

      {/* Formulaire Netflix (INCHANGÉ) */}
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-md bg-black border-2 border-[#E50914] rounded-2xl p-8 space-y-6">
          <h1 className="text-3xl font-extrabold text-white text-center">
            Create Account
          </h1>
          <p className="text-center text-gray-400">
            Sign up to start watching
          </p>

          <form onSubmit={handleSignup} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E50914]"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E50914]"
            />

            {/* ERREUR */}
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-[#E50914] text-white py-2 rounded-lg font-semibold transition ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-red-700"
              }`}
            >
              {loading ? "Création..." : "Sign up"}
            </button>
          </form>

          <p className="text-center text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-[#E50914] hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
