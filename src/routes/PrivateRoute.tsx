import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }: { children: React.ReactNode }) {
  // const isAuthenticated = checkUserAuthentication();
  const isAuthenticated = true;
  // const isAuthenticated = isLoggedIn();
  return isAuthenticated ? children : <Navigate to="/signin" />;
}
