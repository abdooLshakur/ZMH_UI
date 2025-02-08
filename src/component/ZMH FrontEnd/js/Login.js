import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-xl  p-8 bg-gray-900 rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl font-bold text-yellow-500">Welcome Back</h2>
        <p className="text-gray-400 mb-6">Please sign in to continue</p>
        
        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>
          <button
            type="submit"
            className="w-full p-4 mt-4 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600 transition"
          >
            Login
          </button>
        </form>
        
        <p className="text-gray-500 mt-4">
          Don't have an account? <a className="text-gold-500 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
