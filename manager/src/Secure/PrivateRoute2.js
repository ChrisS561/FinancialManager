import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from "../Context/AuthContext";
//creating a wrapper for our current route

export default function PrivateRoute2({ children }) {
  const { currentUser } = useAuth();

  return !currentUser ? children: <Navigate to="/updateProfile"/>
}