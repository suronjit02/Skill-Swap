import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import SkillDetails from "../pages/private/SkillDetails";
import PrivateRoute from "../provider/PrivateRoute";
import MyProfile from "../pages/private/MyProfile";
import ErrorPage from "../pages/ErrorPage";
import ForgotPassword from "../pages/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/skills.json"),
        hydrateFallbackElement: <p>Loading...</p>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/login/forgot-password",
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/details/:id",

        element: (
          <PrivateRoute>
            <SkillDetails></SkillDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/skills.json"),
        hydrateFallbackElement: <p>Loading...</p>,
      },
      {
        path: "/profile",

        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

export default router;
