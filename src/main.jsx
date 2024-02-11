import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/home/Home.jsx";
import Hospital from "./pages/service/Hospital.jsx";
import Service from "./pages/service/Service.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <h1>About</h1>,
      },
      {
        path: "/service",
        element: <Service />,
      },
      { path: "service/hospital/:hosId", element: <Hospital /> },
      {
        path: "/join",
        element: <h1>Join Us</h1>,
      },
      {
        path: "/contact",
        element: <h1>Contact Us</h1>,
      },
      {
        path: "/login",
        element: <h1>Login</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
