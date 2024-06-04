import { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute.tsx";
import Root from "./Root.tsx";
import RegisterPage from "../pages/RegisterPage.tsx";

const SignPage = lazy(() => import("../pages/SignPage.tsx"));
const ErrorPage = lazy(() => import("../pages/ErrorPage.tsx"));
const PaintPage = lazy(() => import("../pages/Paint/PaintPage.tsx"));
// const Gallery = lazy(() => import("../pages/Gallery/Gallery.tsx"));
import Gallery from "../pages/Gallery/Gallery.tsx";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense fallback="LOADING...">
        <Root />
      </Suspense>
    ),
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
        element: (
          <PrivateRoute>
            <PaintPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/gallery",
        element: (
          <PrivateRoute>
            <Gallery />
          </PrivateRoute>
        ),
      },
    ],
  },
];
