import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/home.jsx";
import WeatherPage from "../pages/weatherPage.jsx";
import About from "../pages/about.jsx";
import Favourites from "../pages/favourites.jsx";
import "../app.css";
import AppLayout from "./applayout.jsx";
import WeatherDetails from "../pages/weatherdetails.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,  // ← Parent route (has Header)
    children: [              // ← Child routes (pages)
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/favourite",
        element: <Favourites />,
      },
      {
        path: "/weatherpage",
        element: <WeatherPage />,
      },
      {
        path: "/weather/:city",  
        element: <WeatherDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
