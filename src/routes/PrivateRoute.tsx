import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export function PrivateRoute({ children }: { children: React.ReactNode }) {
  const user = useSelector((state: RootState) => state.auth.value);
  console.log("user", user);

  // const isAuthenticated = checkUserAuthentication();
  // const isAuthenticated = true;
  // const isAuthenticated = isLoggedIn();
  return user ? children : <Navigate to="/signin" />;

  // isAuthenticated ? children : <Navigate to="/signin" />;
}
