import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Login from "./Login";

const PrivateRouter = (props) => {
     var token;
     if (localStorage.getItem("token")) {
          token = JSON.parse(localStorage.getItem("token"));
     }

     if (!token) {
          return <Navigate to="/login" />;
     }
     return <>{props.children}</>;
};

export default PrivateRouter;
