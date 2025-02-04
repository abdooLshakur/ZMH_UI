import React from "react";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-md p-8 bg-black border border-yellow-500 rounded-2xl shadow-lg">
        <motion.h1 
          className="text-4xl font-bold text-center text-yellow-500 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome Back!
        </motion.h1>
        <p className="text-center text-yellow-500 text-lg mb-6">Please log in to continue.</p>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-yellow-500 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-xl bg-black border border-yellow-500 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-yellow-500 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 rounded-xl bg-black border border-yellow-500 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-yellow-500 text-black font-bold rounded-xl hover:bg-opacity-80 focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50"
          >
            Log In
          </button>
        </form>
        <p className="text-center text-sm text-yellow-500 mt-4">
          Don't have an account? <a href="#" className="underline hover:text-opacity-80">Sign up</a>
        </p>
      </div>
    </div>
  );
}
