"use client"

import React, { useState, useContext } from "react";
import UserContext from "../../context/UserContext";


function Register() {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [userphone, setUserphone] = useState("");
  const [password, setPassword] = useState("")

  const { setUser } = useContext(UserContext);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (setUser) {
      setUser({ username, useremail, userphone, password }); // Update context with user data
    }
  };


  return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-6">
    <h1 className="text-3xl font-serif font-bold text-lime-500 mb-6">Register</h1>
    <form onSubmit={handleSubmit} className="w-full max-w-sm bg-gray-300 p-8 rounded-lg shadow-lg">
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
          type="email"
          value={useremail}
          onChange={(e) => setUseremail(e.target.value)}
          placeholder="email"
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

      <div className="mb-6">
        <input
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="phone"
          value={userphone}
          onChange={(e) => setUserphone(e.target.value)}
          placeholder="Phone"
        />
      </div>
      <button
        type="submit"
        className="w-full p-3 bg-lime-500 text-white rounded-md font-bold hover:bg-blue-600 transition duration-200"
      >
        Submit
      </button>
    </form>
  </div>
  
    );
  }
  
  
  
  export default Register;
  
