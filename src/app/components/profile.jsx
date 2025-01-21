"use client";

import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext); // Destructure 'user' from context

  if (!user) {
    return (
      <div className="flex justify-center items-center  bg-gray-100">
        <div className="text-xl font-semibold text-gray-700">
          Please Login
        </div>
      </div>
    ); // Show "Please Login" when no user is logged in
  }
  
  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <div className="text-2xl font-semibold text-gray-800">
        Welcome <span className="font-bold text-blue-600">{user.username}</span>
      </div>
    </div>
  ); // Show the user's name if they are logged in
}  

export default Profile;
