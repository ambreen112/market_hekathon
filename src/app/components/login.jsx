"use client"

import React, { useState, useContext } from "react";
import UserContext from "../../context/UserContext";
import Link from "next/link";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Use context to get the setUser function
  const { setUser } = useContext(UserContext);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (setUser) {
      setUser({ username, password }); // Update context with user data
    }
  };

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-3">
  <h1 className="text-3xl font-serif font-bold text-white mb-6">Login</h1>
  <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
    <div className="mb-4">
      <input
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
    </div>
    <div className="mb-6">
      <input
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
    </div>
    <button
      type="submit"
      className="w-full p-3 bg-blue-500 text-white rounded-md font-bold hover:bg-blue-600 transition duration-200"
    >
      Submit
    </button>
  </form>
</div>
<div className="bg-black p-6 flex justify-center">
  <Link href={"/"}>
    <button className="text-3xl font-Roboto text-white bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-l">
      Go to Home
    </button>
  </Link>
</div>

</>
  );
}



export default Login;
