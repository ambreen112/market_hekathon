"use client"
import React from "react";
import UserContextProvider from "@/context/UserContextProvider";
import Register from "../components/register"



 export default function App1 (){
    return(
      <>
      <UserContextProvider>
   <Register/>
   </UserContextProvider>
      </> 
    )
 }