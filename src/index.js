import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Events from "./path/Events";
import Event from "./path/Event";
import Register from "./path/Register";
import Login from "./path/Login";
import App from "./App";
import Error from "./path/Error";
import PrivateRouter from "./path/PrivateRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
     <React.StrictMode>
          <BrowserRouter>
               <Routes>
                    <Route path="/" element={<App />}>
                         <Route index element={<Events />} />
                         <Route
                              path="/organizers/:os/events/:es"
                              element={<Event />}
                         />
                         <Route path="/login" element={<Login />} />
                         <Route path="*" element={<Error />} />
                    </Route>
               </Routes>
          </BrowserRouter>
     </React.StrictMode>
);
