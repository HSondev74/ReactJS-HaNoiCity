import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

const router = createBrowserRouter([
     {
          path: "/",
          element: <Home />,
          errorElement: <h1> Error, Not Found 404 !</h1>,
     },
     {
          path: "/login",
          element: <Login />,
     },
]);

export default router;
