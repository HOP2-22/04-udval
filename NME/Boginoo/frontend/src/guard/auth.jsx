import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { User } from "../UserContext/UserContext";

export const GuardedRoute = ({ children }) => {
  const { user } = useContext(User);
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
