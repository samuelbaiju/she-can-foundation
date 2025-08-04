// Tailwind Configured Login Page with Modern Dark Theme
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center text-white font-sans">
      <div className="w-full max-w-md p-10 rounded-3xl bg-gray-950 shadow-2xl backdrop-blur-md bg-opacity-80">
        <h2 className="text-3xl font-bold mb-6 text-white">
          Create new account<span className="text-blue-500">.</span>
        </h2>
       <p className="text-sm mb-6 text-gray-400">
          Already a member?{" "}
          <span
            className="text-blue-400 cursor-pointer hover:underline"
            onClick={() => navigate("/")}
          >
            Login
          </span>
        </p>
        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-md text-white font-semibold transition duration-300"
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  );
}
