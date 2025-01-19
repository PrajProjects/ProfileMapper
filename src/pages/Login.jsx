import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded admin credentials
    const adminEmail = "admin@example.com";
    const adminPassword = "admin123";

    if (email === adminEmail && password === adminPassword) {
      navigate("/adminPanel");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
   <>
    <div className="bg-[#F4FFC3] min-h-screen">
  <Nav/>
  
   <div className="flex items-center justify-center mt-12">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md border-4 border-black-600 ">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Admin Login</h2>
        {error && <p className="text-red-500 text-center mb-4 ">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#003049] text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
   </div>
   </>
  );
};

export default LoginForm;
