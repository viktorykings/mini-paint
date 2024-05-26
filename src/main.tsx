import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage.tsx";
import Root from "./roots/Root.tsx";

const SignPage = lazy(() => import("./pages/SignPage.tsx"))
const ErrorPage = lazy(() => import("./pages/ErrorPage.tsx"))
const PaintPage = lazy(() => import("./pages/PaintPage.tsx"))
const Gallery = lazy(() => import("./pages/Gallery/Gallery.tsx"))


const router = createBrowserRouter([
  {
    path: "/",
    element:
      <Suspense fallback='LOADING...'>
          <Root />
      </Suspense>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/signin",
        element: <SignPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/paint",
        element:        <PrivateRoute>
        <PaintPage />
        </PrivateRoute>
      },
      {
        path: "/gallery",
        element:  <PrivateRoute><Gallery /></PrivateRoute>
      },
    ],
  },
]);

function PrivateRoute({children}: {children : React.ReactNode} ) {
  // const isAuthenticated = checkUserAuthentication();
  const isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to="/signin" />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
