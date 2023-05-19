import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function PrivateRoute({ children }) {

	const { currentUser } = useAuth()
  
	return currentUser ? children: <Navigate to="/"/>
}
