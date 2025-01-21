"use client"
import React from "react";

import UserContextProvider from "@/context/UserContextProvider";


import Profile from "../components/profile";
import Login from "../components/login";



 export default function App (){
    return(
      <>
      
      <UserContextProvider>
    <Login/>
    <Profile/>
   </UserContextProvider>
      </>  
    )
 }