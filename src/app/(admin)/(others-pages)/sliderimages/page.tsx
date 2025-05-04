"use client";

import { useState } from "react";
import Image from "next/image";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import LoginIcon from "@mui/icons-material/Login";
// import CircularProgress from "@mui/material/CircularProgress";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

  return (
    <div
      className="h-screen bg-cover bg-center bg-fixed flex justify-center items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D')",
      }}
    >
      <div className="bg-white/30 border-2 border-white rounded-lg backdrop-blur-md p-8 w-full max-w-md shadow-xl">
        <div className="flex justify-center mb-6">
          <Image
            src="/images/bannerImage3.png"
            alt="Restaurant Logo"
            width={120}
            height={60}
            className="drop-shadow-md"
          />
        </div>
        <h1 className="text-white text-center text-3xl font-bold mb-6">
          Restaurant Admin
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white mb-1 font-medium">Admin Email</label>
            <input
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-white text-white placeholder-white bg-transparent rounded focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div>
            <label className="block text-white mb-1 font-medium">Admin Password</label>
            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-white text-white placeholder-white bg-transparent rounded focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center gap-2 px-6 py-2 text-lg font-semibold border-2 border-white text-white rounded hover:bg-white hover:text-black transition"
            >
              {/* {isLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                <>
                  Log In <LoginIcon />
                </>
              )} */}
              login
            </button>
          </div>
        </form>

       
      </div>
    </div>
  );
} }
